package de.ultical.backend.app;

import java.time.LocalDate;
import java.util.EnumSet;

import javax.servlet.DispatcherType;
import javax.servlet.FilterRegistration;
import javax.ws.rs.client.Client;

import org.apache.ibatis.session.SqlSession;
import org.eclipse.jetty.servlets.CrossOriginFilter;
import org.glassfish.hk2.api.Factory;
import org.glassfish.hk2.utilities.binding.AbstractBinder;

import com.fasterxml.jackson.databind.ObjectMapper;

import de.spinscale.dropwizard.jobs.JobsBundle;
import de.ultical.backend.api.*;
import de.ultical.backend.data.DataStore;
import de.ultical.backend.data.LocalDateMixIn;
import io.dropwizard.client.JerseyClientBuilder;
import io.dropwizard.client.JerseyClientConfiguration;
import io.dropwizard.db.ManagedDataSource;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;

public class Application extends io.dropwizard.Application<UltiCalConfig> {

	public static void main(String[] args) throws Exception {
		Application ultiCal = new Application();
		ultiCal.run(args);
	}

	@Override
	public void initialize(Bootstrap<UltiCalConfig> bootstrap) {
		super.initialize(bootstrap);

		ObjectMapper objectMapper = bootstrap.getObjectMapper();
		objectMapper.addMixIn(LocalDate.class, LocalDateMixIn.class);

		// add Jobs bundle to provide schedules tasks
		bootstrap.addBundle(new JobsBundle("de.ultical.backend.jobs"));
	}

	@Override
	public void run(UltiCalConfig config, Environment env) throws Exception {
		ManagedDataSource mds = config.getDatabase().build(env.metrics(), "UltiCal DataSource");
		env.lifecycle().manage(mds);
		/*
		 * We create a MyBatisManager and register it with the
		 * dropwizard-lifecylce system. This ensures that MYBatis is started,
		 * when the dropwizard environment starts and stopped accordingly.
		 */
		final MyBatisManager mbm = new MyBatisManager(mds);
		env.lifecycle().manage(mbm);
		env.jersey().register(new AbstractBinder() {

			@Override
			protected void configure() {
				/*
				 * we use the MyBatisManager as a factory to provide access to a
				 * SqlSession.
				 */
				this.bindFactory(mbm).to(SqlSession.class);
				this.bindFactory(DataStoreFactory.class).to(DataStore.class);

				// Create factory to inject Client
				this.bindFactory(new Factory<Client>() {

					private Client clientInstance;

					@Override
					public void dispose(Client instance) {
						if (instance != null) {
							instance.close();
						}
					}

					@Override
					public Client provide() {
						if (this.clientInstance == null) {
							this.clientInstance = new JerseyClientBuilder(env).using(new JerseyClientConfiguration()).using(env).build("dfvApi");
						}
						return this.clientInstance;
					}

				}).to(Client.class);

			}
		});

		this.addCorsFilter(env);
		
		//add healthcheck
		env.healthChecks().register("Database healthcheck", new DatabaseHealthCheck(mds));

		env.jersey().register(EventsResource.class);
		env.jersey().register(TournamentResource.class);
		env.jersey().register(SeasonResource.class);
		env.jersey().register(TournamentFormatResource.class);

		// TODO inject config?!
		env.jersey().register(new RegisterResource(config));
		env.jersey().register(new TempInitResource(config));

	}

	/*
	 * Add CORS filter to allow frontend to send requests to server
	 */
	private void addCorsFilter(Environment env) {
		FilterRegistration.Dynamic corsFilter = env.servlets().addFilter("CORSFilter", CrossOriginFilter.class);

		// Add URL mapping
		corsFilter.addMappingForUrlPatterns(EnumSet.allOf(DispatcherType.class), true, "/*");
		corsFilter.setInitParameter(CrossOriginFilter.ALLOWED_METHODS_PARAM, "GET,PUT,POST,DELETE,OPTIONS");
		corsFilter.setInitParameter(CrossOriginFilter.ALLOWED_ORIGINS_PARAM, "*");
		corsFilter.setInitParameter(CrossOriginFilter.ACCESS_CONTROL_ALLOW_ORIGIN_HEADER, "*");
		corsFilter.setInitParameter(CrossOriginFilter.ALLOWED_HEADERS_PARAM, "Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin");
		corsFilter.setInitParameter(CrossOriginFilter.ACCESS_CONTROL_ALLOW_CREDENTIALS_HEADER, "true");
	}

}
