package de.ultical.backend.api;

import static org.mockito.Matchers.any;
import static org.mockito.Matchers.eq;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Collections;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;

import org.junit.After;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import de.ultical.backend.api.transferClasses.DfvMvName;
import de.ultical.backend.api.transferClasses.DfvMvPlayer;
import de.ultical.backend.app.DfvApiConfig;
import de.ultical.backend.app.UltiCalConfig;
import de.ultical.backend.data.DataStore;
import de.ultical.backend.model.Context;
import de.ultical.backend.model.DfvPlayer;
import de.ultical.backend.model.DivisionAge;
import de.ultical.backend.model.DivisionType;
import de.ultical.backend.model.Gender;
import de.ultical.backend.model.Roster;
import de.ultical.backend.model.Season;
import de.ultical.backend.model.Team;
import de.ultical.backend.model.TeamRegistration;
import de.ultical.backend.model.User;

public class RosterResourceTest {

    private static final int DFV_NUMBER_PASSIVE = 12344321;

    private static final int USER_ID = 23;

    private static final int TEAM_42 = 42;
    private static final int TEAM_43 = 43;

    private static final int DFV_NUMBER_MASTER = 1234567;
    private static final int DFV_NUMBER_JUNIOR = 1234568;
    private static final int DFV_NUMBER_WOMAN = 1234569;
    private static final int DFV_NUMBER_17YO_WOMAN = 1234570;
    private static final int DFV_NUMBER_UNPAID_PLAYER = 567890;

    private final static int ROSTER_ID_MASTER = 123;
    private final static int ROSTER_ID_JUNIOR = 124;
    private final static int ROSTER_ID_WOMEN = 125;
    private final static int ROSTER_ID_OPEN_REG_A = 126;
    private final static int ROSTER_ID_OPEN_REG_B = 127;
    private final static int ROSTER_ID_OPEN_U17 = 128;

    private final static int TEAM_REG_A = 2245;

    @Mock
    Roster rosterMaster;
    @Mock
    Roster rosterJunior;
    @Mock
    Roster rosterWomen;
    @Mock
    Roster rosterOpenRegularA;
    @Mock
    Roster rosterOpenRegularB;
    @Mock
    Roster rosterU17Open;
    @Mock
    Team teamA;
    @Mock
    Team teamB;
    @Mock
    User currentUser;
    @Mock
    DfvPlayer playerMasters;
    @Mock
    DfvPlayer playerJuniors;
    @Mock
    DfvPlayer playerWoman;
    @Mock
    DataStore dataStore;
    @Mock
    TeamRegistration teamRegA;
    @Mock
    DfvMvName dfvNameMaster;
    @Mock
    DfvMvName dfvNameJunior;
    @Mock
    DfvMvName dfvNameWoman;
    @Mock
    DfvMvName dfvName17yoWoman;
    @Mock
    DfvPlayer player17yoWoman;
    @Mock
    DfvPlayer passivePlayer;
    @Mock
    DfvMvName dfvNamePassive;
    @Mock
    DfvMvName dfvUnpaidPlayer;

    private RosterResource resource;

    private Season season;
    private Context dfvContext;

    @Rule
    public ExpectedException expected = ExpectedException.none();

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);

        this.season = new Season();
        this.season.setId(1);
        this.season.setYear(2016);

        this.dfvContext = new Context();
        this.dfvContext.setId(1);
        this.dfvContext.setAcronym("DFV");

        when(this.rosterMaster.getId()).thenReturn(Integer.valueOf(ROSTER_ID_MASTER));
        when(this.rosterMaster.getSeason()).thenReturn(this.season);
        when(this.rosterMaster.getDivisionType()).thenReturn(DivisionType.OPEN);
        when(this.rosterMaster.getDivisionAge()).thenReturn(DivisionAge.MASTERS);
        when(this.dataStore.get(eq(ROSTER_ID_MASTER), eq(Roster.class))).thenReturn(this.rosterMaster);
        when(this.rosterJunior.getId()).thenReturn(Integer.valueOf(ROSTER_ID_JUNIOR));
        when(this.rosterJunior.getSeason()).thenReturn(this.season);
        when(this.rosterJunior.getDivisionType()).thenReturn(DivisionType.OPEN);
        when(this.rosterJunior.getDivisionAge()).thenReturn(DivisionAge.U23);
        when(this.dataStore.get(eq(ROSTER_ID_JUNIOR), eq(Roster.class))).thenReturn(this.rosterJunior);
        when(this.rosterWomen.getId()).thenReturn(Integer.valueOf(ROSTER_ID_WOMEN));
        when(this.rosterWomen.getSeason()).thenReturn(this.season);
        when(this.rosterWomen.getDivisionType()).thenReturn(DivisionType.WOMEN);
        when(this.rosterWomen.getDivisionAge()).thenReturn(DivisionAge.REGULAR);
        when(this.rosterWomen.getTeam()).thenReturn(this.teamA);
        when(this.dataStore.get(eq(ROSTER_ID_WOMEN), eq(Roster.class))).thenReturn(this.rosterWomen);
        when(this.rosterOpenRegularA.getId()).thenReturn(ROSTER_ID_OPEN_REG_A);
        when(this.rosterOpenRegularA.getDivisionAge()).thenReturn(DivisionAge.REGULAR);
        when(this.rosterOpenRegularA.getDivisionType()).thenReturn(DivisionType.OPEN);
        when(this.rosterOpenRegularA.getSeason()).thenReturn(this.season);
        when(this.rosterOpenRegularA.getTeam()).thenReturn(this.teamA);
        when(this.rosterOpenRegularA.getContext()).thenReturn(this.dfvContext);
        when(this.rosterOpenRegularA.getNameAddition()).thenReturn("");
        when(this.rosterOpenRegularB.getId()).thenReturn(ROSTER_ID_OPEN_REG_B);
        when(this.rosterOpenRegularB.getDivisionAge()).thenReturn(DivisionAge.REGULAR);
        when(this.rosterOpenRegularB.getDivisionType()).thenReturn(DivisionType.OPEN);
        when(this.rosterOpenRegularB.getSeason()).thenReturn(this.season);
        when(this.rosterOpenRegularB.getTeam()).thenReturn(this.teamB);
        when(this.rosterOpenRegularB.getContext()).thenReturn(this.dfvContext);
        when(this.rosterOpenRegularB.getNameAddition()).thenReturn("");
        when(this.rosterU17Open.getId()).thenReturn(ROSTER_ID_OPEN_U17);
        when(this.rosterU17Open.getDivisionType()).thenReturn(DivisionType.OPEN);
        when(this.rosterU17Open.getDivisionAge()).thenReturn(DivisionAge.U17);
        when(this.rosterU17Open.getSeason()).thenReturn(this.season);
        when(this.rosterU17Open.getContext()).thenReturn(this.dfvContext);
        when(this.rosterU17Open.getTeam()).thenReturn(this.teamA);
        when(this.rosterU17Open.getNameAddition()).thenReturn("");
        when(this.dataStore.get(eq(ROSTER_ID_OPEN_U17), eq(Roster.class))).thenReturn(this.rosterU17Open);
        when(this.dataStore.get(eq(ROSTER_ID_OPEN_REG_A), eq(Roster.class))).thenReturn(this.rosterOpenRegularA);
        when(this.dataStore.get(eq(ROSTER_ID_OPEN_REG_B), eq(Roster.class))).thenReturn(this.rosterOpenRegularB);
        when(this.dataStore.get(eq(TEAM_42), eq(Team.class))).thenReturn(this.teamA);
        when(this.dataStore.get(eq(TEAM_43), eq(Team.class))).thenReturn(this.teamB);
        when(this.rosterMaster.getTeam()).thenReturn(this.teamA);
        when(this.rosterJunior.getTeam()).thenReturn(this.teamA);
        when(this.dfvNameMaster.getDfvNumber()).thenReturn(Integer.valueOf(DFV_NUMBER_MASTER));
        when(this.dfvNameMaster.isDse()).thenReturn(Boolean.TRUE);
        when(this.dataStore.getDfvMvName(DFV_NUMBER_MASTER)).thenReturn(dfvNameMaster);
        when(this.dataStore.getPlayerByDfvNumber(DFV_NUMBER_MASTER)).thenReturn(this.playerMasters);
        when(this.playerMasters.getBirthDate()).thenReturn(LocalDate.of(1983, 12, 31));
        when(this.playerMasters.getGender()).thenReturn(Gender.MALE);
        when(this.playerMasters.isEligible()).thenReturn(Boolean.TRUE);
        when(this.teamA.getId()).thenReturn(Integer.valueOf(TEAM_42));
        when(this.teamA.getAdmins()).thenReturn(Collections.singletonList(this.currentUser));
        when(this.teamB.getId()).thenReturn(Integer.valueOf(TEAM_43));
        when(this.teamB.getAdmins()).thenReturn(Collections.singletonList(this.currentUser));
        when(this.currentUser.getId()).thenReturn(Integer.valueOf(USER_ID));

        when(this.dfvNameJunior.getDfvNumber()).thenReturn(Integer.valueOf(DFV_NUMBER_JUNIOR));
        when(this.dfvNameJunior.isDse()).thenReturn(Boolean.TRUE);
        when(this.dataStore.getDfvMvName(DFV_NUMBER_JUNIOR)).thenReturn(this.dfvNameJunior);
        when(this.dataStore.getPlayerByDfvNumber(DFV_NUMBER_JUNIOR)).thenReturn(this.playerJuniors);
        when(this.playerJuniors.getBirthDate()).thenReturn(LocalDate.of(1995, 5, 1));
        when(this.playerJuniors.isEligible()).thenReturn(Boolean.TRUE);

        when(this.dfvNameWoman.getDfvNumber()).thenReturn(Integer.valueOf(DFV_NUMBER_WOMAN));
        when(this.dfvNameWoman.isDse()).thenReturn(Boolean.TRUE);
        when(this.playerWoman.getGender()).thenReturn(Gender.FEMALE);
        when(this.playerWoman.getBirthDate()).thenReturn(LocalDate.of(1991, 3, 20));
        when(this.playerWoman.isEligible()).thenReturn(Boolean.TRUE);
        when(this.dataStore.getDfvMvName(DFV_NUMBER_WOMAN)).thenReturn(dfvNameWoman);
        when(this.dataStore.getPlayerByDfvNumber(DFV_NUMBER_WOMAN)).thenReturn(this.playerWoman);

        when(this.teamRegA.getId()).thenReturn(TEAM_REG_A);
        when(this.teamRegA.getRoster()).thenReturn(this.rosterOpenRegularA);

        when(this.passivePlayer.getId()).thenReturn(DFV_NUMBER_PASSIVE);
        when(this.dataStore.getPlayerByDfvNumber(DFV_NUMBER_PASSIVE)).thenReturn(this.passivePlayer);
        when(this.dfvNamePassive.getDfvNumber()).thenReturn(DFV_NUMBER_PASSIVE);
        when(this.dfvNamePassive.isDse()).thenReturn(Boolean.TRUE);
        when(this.dataStore.getDfvMvName(DFV_NUMBER_PASSIVE)).thenReturn(dfvNamePassive);

        when(this.dfvName17yoWoman.getDfvNumber()).thenReturn(DFV_NUMBER_17YO_WOMAN);
        when(this.dfvName17yoWoman.isDse()).thenReturn(Boolean.TRUE);
        when(this.dfvName17yoWoman.isActive()).thenReturn(Boolean.TRUE);
        when(this.player17yoWoman.getGender()).thenReturn(Gender.FEMALE);
        when(this.player17yoWoman.isEligible()).thenReturn(Boolean.TRUE);
        when(this.player17yoWoman.getBirthDate()).thenReturn(LocalDate.of(1999, 5, 6));
        when(this.dataStore.getDfvMvName(DFV_NUMBER_17YO_WOMAN)).thenReturn(dfvName17yoWoman);
        when(this.dataStore.getPlayerByDfvNumber(eq(DFV_NUMBER_17YO_WOMAN))).thenReturn(this.player17yoWoman);
        
        when(this.dfvUnpaidPlayer.getDfvNumber()).thenReturn(DFV_NUMBER_UNPAID_PLAYER);
        when(this.dfvUnpaidPlayer.isDse()).thenReturn(true);
        when(this.dfvUnpaidPlayer.isActive()).thenReturn(true);
        when(this.dfvUnpaidPlayer.getLastModified()).thenReturn(LocalDateTime.of(2018, 12, 27, 13,14,15));
        when(this.dataStore.getDfvMvName(DFV_NUMBER_UNPAID_PLAYER)).thenReturn(dfvUnpaidPlayer);

        DfvMvPlayer unpaidPlayer = new DfvMvPlayer();
        unpaidPlayer.setDse(true);
        unpaidPlayer.setActive(true);
        unpaidPlayer.setDfvnr(DFV_NUMBER_UNPAID_PLAYER);
        unpaidPlayer.setGender("männlich");
        unpaidPlayer.setEmail("test");
        unpaidPlayer.setIdle(false);
        unpaidPlayer.setPaid(false);
        unpaidPlayer.setDobString("1981-02-03");

        Invocation.Builder builder = Mockito.mock(Invocation.Builder.class);
        when(builder.get(DfvMvPlayer.class)).thenReturn(unpaidPlayer);
        WebTarget target = Mockito.mock(WebTarget.class);
        when(target.path(Mockito.anyString())).thenReturn(target);
        when(target.queryParam(Mockito.anyString(), Mockito.any())).thenReturn(target);
        when(target.path(Mockito.anyString())).thenReturn(target);
        when(target.request(Mockito.eq(MediaType.APPLICATION_JSON))).thenReturn(builder);
        Client client = Mockito.mock(Client.class);
        when(client.target(Mockito.anyString())).thenReturn(target);
        
        UltiCalConfig conf = new UltiCalConfig();
        DfvApiConfig dfvApi = new DfvApiConfig();
        dfvApi.setUrl("dfdf");
        dfvApi.setToken("dfdf");
        dfvApi.setSecret("dfdfd");
		conf.setDfvApi(dfvApi);

        this.resource = new RosterResource();
        this.resource.dataStore = this.dataStore;
        this.resource.client = client;
        this.resource.config = conf;
    }

    @After
    public void tearDown() {
        // Mockito.reset(this.dataStore);
    }

    @Test
    public void testAddPlayerToTwoRosters() throws Exception {
        this.resource.addPlayerToRoster(this.currentUser, ROSTER_ID_OPEN_REG_A, this.dfvNameMaster);
        verify(this.dataStore).addPlayerToRoster(this.rosterOpenRegularA, this.playerMasters);
        when(this.dataStore.getRosterByPlayerSeasonDivision(this.playerMasters.getId(), this.rosterOpenRegularB))
                .thenReturn(Collections.singletonList(this.rosterOpenRegularA));
        when(this.dataStore.getTeamRegistrationsByRoster(this.rosterOpenRegularA))
                .thenReturn(Collections.singletonList(this.teamRegA));
        this.expected.expect(WebApplicationException.class);
        this.resource.addPlayerToRoster(this.currentUser, ROSTER_ID_OPEN_REG_B, this.dfvNameMaster);
        verify(this.dataStore, times(1)).addPlayerToRoster(any(), any());
    }

    @Test
    public void testAddMasterToMasters() throws Exception {
        this.resource.addPlayerToRoster(this.currentUser, ROSTER_ID_MASTER, this.dfvNameMaster);
        verify(this.dataStore).addPlayerToRoster(this.rosterMaster, this.playerMasters);
    }

    @Test
    public void testAddJuniorToMasters() throws Exception {
        this.expected.expect(WebApplicationException.class);
        this.expected.expectMessage("age does not match");
        this.resource.addPlayerToRoster(this.currentUser, ROSTER_ID_MASTER, this.dfvNameJunior);
        verify(this.dataStore, never()).addPlayerToRoster(any(), any());
    }

    @Test
    public void testAddJuniorToJunior() throws Exception {
        this.resource.addPlayerToRoster(this.currentUser, ROSTER_ID_JUNIOR, this.dfvNameJunior);
        verify(this.dataStore).addPlayerToRoster(this.rosterJunior, this.playerJuniors);
    }

    @Test
    public void testAddMasterToJuniors() throws Exception {
        this.expected.expect(WebApplicationException.class);
        this.expected.expectMessage("age does not match");
        this.resource.addPlayerToRoster(this.currentUser, ROSTER_ID_JUNIOR, this.dfvNameMaster);
        verify(this.dataStore, never()).addPlayerToRoster(any(), any());
    }

    @Test
    public void testAddMaleToWomenRoster() throws Exception {
        this.expected.expect(WebApplicationException.class);
        this.expected.expectMessage("has wrong gender");
        this.resource.addPlayerToRoster(this.currentUser, ROSTER_ID_WOMEN, this.dfvNameMaster);
        verify(this.dataStore, never()).addPlayerToRoster(any(), any());
    }

    @Test
    public void testAddWomanToWomen() throws Exception {
        this.resource.addPlayerToRoster(this.currentUser, ROSTER_ID_WOMEN, this.dfvNameWoman);
        verify(this.dataStore).addPlayerToRoster(this.rosterWomen, this.playerWoman);
    }

    @Test(expected = WebApplicationException.class)
    public void testAddPassivePlayer() throws Exception {
        this.resource.addPlayerToRoster(this.currentUser, ROSTER_ID_OPEN_REG_A, this.dfvNamePassive);
    }

    @Test(expected = WebApplicationException.class)
    public void testNoDse() throws Exception {
        final DfvMvName noDseMVName = new DfvMvName();
        noDseMVName.setDse(false);
        noDseMVName.setDfvnr(191919);
        when(this.dataStore.getDfvMvName(191919)).thenReturn(noDseMVName);
        this.resource.addPlayerToRoster(this.currentUser, ROSTER_ID_OPEN_REG_A, noDseMVName);
    }

    @Test
    public void testAllCanPlayOpen() throws Exception {
        this.resource.addPlayerToRoster(this.currentUser, ROSTER_ID_OPEN_REG_A, this.dfvNameJunior);
        verify(this.dataStore).addPlayerToRoster(this.rosterOpenRegularA, this.playerJuniors);
        this.resource.addPlayerToRoster(this.currentUser, ROSTER_ID_OPEN_REG_A, this.dfvNameMaster);
        verify(this.dataStore).addPlayerToRoster(this.rosterOpenRegularA, this.playerMasters);
        this.resource.addPlayerToRoster(this.currentUser, ROSTER_ID_OPEN_REG_A, this.dfvNameWoman);
        verify(this.dataStore).addPlayerToRoster(this.rosterOpenRegularA, this.playerWoman);
    }

    @Test
    public void test17yoWomanCanPlayU17() throws Exception {
        this.resource.addPlayerToRoster(this.currentUser, ROSTER_ID_OPEN_U17, this.dfvName17yoWoman);
        verify(this.dataStore).addPlayerToRoster(this.rosterU17Open, this.player17yoWoman);
    }
    
    @Test(expected = WebApplicationException.class)
    public void testUnpaidPlayerCannotPlay() throws Exception {
    	this.resource.addPlayerToRoster(this.currentUser, ROSTER_ID_OPEN_REG_A, this.dfvUnpaidPlayer);
    }
}
