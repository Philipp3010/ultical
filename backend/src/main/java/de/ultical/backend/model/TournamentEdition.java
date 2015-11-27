package de.ultical.backend.model;

import java.time.LocalDate;
import java.util.Set;

import io.dropwizard.validation.MinSize;
import lombok.Data;

@Data
public abstract class TournamentEdition {

	private TournamentFormat tournamentFormat;

	private String alternativeName;
	private Season season;

	private LocalDate registrationStart;
	private LocalDate registrationStop;

	@MinSize(1)
	private Set<DivisionRegistration> divisionRegistrations;
}
