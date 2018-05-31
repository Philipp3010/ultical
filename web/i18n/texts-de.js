'use strict';

if (undefined === TRANSLATIONS) {
	var TRANSLATIONS = {};
}
TRANSLATIONS['de'] = {

		general: {
			pageTitle: 'DFV-Turniere',
			amDateFormat: "DD.MM.YYYY",
			amDateFormatShort: "D.M.YY",
			amDatetimeFormat : "DD.MM.YYYY - HH:mm [Uhr]",
			amDateFromSameMonthShort: "D.",
			amDateFromSameMonth: "D.",
			amDateFromDiffMonthShort: "M.",
			amDateFromDiffMonth: " MMMM ",
			amDateToShort: "D.M.",
			amDateTo: "D. MMMM",
			amDateToFull: "D. MMMM YYYY",
			na: 'Noch keine Informationen',
			close: 'schließen',
			email: 'Email',
			phone: 'Telefon',
			optional: 'optional',
			save: 'Speichern',
			cancel: 'Abbrechen',
			delete: 'Löschen',
			create: 'Erstellen',
			remove: 'Entfernen',
			done: 'Fertig',
			or: 'oder',
			team: 'Team',
			teams: 'Teams',
			player: 'Spieler',
			players: 'Spieler',
			currencyFormat: '{{ amount }} {{ currencySymbol }}',
			decimalSeparator: ',',
			club: 'Verein',
			division: 'Division',
			divisions: 'Divisionen',
			selectOverflow: 'ausgewählt',
			selectPlaceholder: 'Bitte auswählen',
			error: 'Fehler!',
		},

		email: {
			title: 'Neue Nachricht',
			descriptionTeam: 'Verfasse deine Nachricht an die Kontaktpersonen von {{ teamName }}.',
			descriptionEvent: 'Verfasse deine Nachricht an die lokalen Veranstalter des Turniers {{ eventName }}.',
			sendButtonLabel: 'Email senden',
			name: 'Name',
			namePlaceholder: 'Bitte deinen Namen als Absender eingeben',
			replyToDesc: 'Diese Emailadresse wird, zusammen mit deinem Namen, als Antwortadresse übermittelt. Sie ist für die Empfänger deiner Nachricht sichtbar.',
			replyTo: 'Antwortadresse',
			replyToPlaceholder: 'Bitte Emailadresse angeben',
			body: 'Nachrichtentext',
			successTitle: 'Nachricht erfolgreich gesendet!',
			successText: 'Du erhälst eine Kopie an die angegebene Antwortadresse.',
			failure: 'Es ist ein unbekannter Fehler aufgetreten. Bitte kontrolliere noch einmal die angegebene Antwortadresse.',
			authorDescriptionText: 'Diese Email wurde von {{ authorName }} über dfv-turniere.de versendet.',
			subjectFrom: 'Nachricht von {{ senderName }}',
			subjectTo: 'Nachricht für {{ receiverName }}',
			empty: 'Bitte gib einen Nachrichtentext ein!',
			emptyName: 'Bitte gib einen Namen ein',
			emptyReplyTo: 'Bitte gib eine Antwortadresse an',
			emptyCaptcha: 'Bitte löse die Aufgabe des Captchas unten in diesem Fenster',
			errorCaptcha: 'Ein Fehler ist bei der Verarbeitung des Captchas aufgetreten. Bitte löse es erneut',
		},

		nav: {
			titleFlipText: 'Deutscher Frisbeesport Verband e.V.',
			login: 'Login',
			loginFail: {
				wrongCredentials: 'Email oder Passwort fehlerhaft!',
				wrongCredentialsAction: 'Passwort vergessen?',
				emailNotConfirmed: 'Email Adresse noch nicht bestätigt!',
				emailNotConfirmedAction: 'Bestätigungsemail erneut senden?',
				dfvEmailNotOptIn: 'Die Mail an die beim DFV hinterlegte Emailadresse wurde noch nicht bestätigt!',
				dfvEmailNotOptInAction: 'Mail erneut senden?',
				loginFail: 'Felher bei der Anmeldung',
			},
			loginEmailActions: {
				successTitle: 'Email erfolgreich gesendet!',
				passwordReset: 'Weitere Anweisungen, wie das Passwort zurückgesetzt werden kann findest du in der Email',
				confirmationEmailSendContent: 'Bitte bestätige den Erhalt der Email mit dem enthaltenen Link. Danach kannst du dich einloggen.',
			},
			register: 'Registrieren',
			eventDropdown: {
				label: 'Turniere',
				newEvent: 'Neues Turnier',
				listEvents: 'Turniere anzeigen',
			},
			teams: 'Teams',
			profileDropdown: {
				ownTeams: 'Meine Teams',
				ownEvents: 'Meine Turniere',
				logout: 'Abmelden',
			},
			actionsLabel: 'Aktionen',
			menuLabel: 'Menü',
		},

		season: {
			season: 'Saison',
			indoor: 'Indoor',
			indoorFullName: 'Indoor',
			outdoor: '',
			outdoorFullName: 'Outdoor',
		},

		division: {
			u14: 'U14',
			u17: 'U17',
			u20: 'Juniors',
			u23: 'U23',
			regular: 'jedes Alter',
			masters: 'Masters',
			grandmasters: 'Grandmasters',
			greatgrand: 'Great Grandmasters',
			open: 'Open',
			women: 'Damen',
			mixed: 'Mixed',
		},

		start: {

		},

		tournaments: {

		},

		user: {
			registration: {
				title: 'Neuen Benutzer registrieren',
				dfvLabel: 'Hinweis',
				dfvDescription: 'Nur DFV Mitglieder können sich hier registrieren. Außerdem ist es notwendig, dass du beim DFV (über deinen Verein) eine gültige Email Adresse angegeben hast.',
				register: 'Benutzer registrieren',
				dfvEmail: 'DFV Emailadresse',
				dfvEmailPlaceholder: 'Emailadresse, die beim DFV gemeldet ist',
				error: {
					title: 'Fehler bei der Registrierung!',
					passwordsNotEqual: 'Die Passwörter stimmen nicht überein',
					validation_error: 'Das Passwort muss mindestens 10 Zeichen lang sein.',
					not_found: 'Ein Eintrag mit diesem Namen und Geburtstag konnte in der DFV Datenbank nicht gefunden werden.',
					ambiguous_email: 'Es existieren mehrere Einträge mit dem gleichen Namen, Geburtstag und Emailadresse. Bitte wähle unten deinen Verein. Ist dein Verein nicht in der Liste, wende dich bitte an {{ supportEmail }}.',
					ambiguous: 'Es existieren mehrere Einträge mit dem gleichen Namen und Geburtstag. Bitte wähle unten deinen Verein. Ist dein Verein nicht in der Liste, dann bist du nicht beim DFV gemeldet bzw. hast dort keine Emailadresse angegeben. Wende dich in dem Fall an die verantwortlichen Stellen in deinem Verein.',
					no_dfv_email: 'Du hast keine Emailadresse beim DFV hinterlegt. Bitte wende dich an die verantwortlichen Stellen in deinem Verein.',
					email_already_taken: 'Diese Emailadresse wird bereits benutzt. Bitte wähle eine andere.',
					user_already_registered: 'Du bist bereits registriert. Bitte benutze den Login Button. Dort kannst du auch ein neues Passwort anfordern.',
				},
				success: {
					title: 'Registrierung erfolgreich!',
					confirmationEmail: 'Eine Email mit einem Bestätigungslink wurde an {{ email }} verschickt. Sobald du deine Adresse bestätigt hast, kannst du dich einloggen.',
					dfvEmail: 'Außerdem wurde eine Email an deine beim DFV hinterlegte Adresse ({{ dfvEmail }}) gesendet. Bitte bestätige auch diese.',
				},
			},
			firstname: 'Vorname',
			lastname: 'Nachname',
			email: 'Emailadresse',
			dob: 'Geburtsdatum',
			club: 'Verein',
			password: 'Passwort',
			passwordCheck: 'Passwort wiederholen',
		},

		emailCode: {
			noCodeTitle: 'Ungültiger Link',
			noCodeForgotPw: 'Der benutzte Link ist abgelaufen (er ist 3 Stunden gültig) oder er wurde schon einmal benutzt. Bitte fordere einen neuen Code an',
			noCodeConfirm: 'Der benutzte Link wurde schon einmal benutzt. Bitte benutze das Login Feld, um einen neuen Code anzufordern.',
			successTitle: 'Email erfolgreich bestätigt!',
			successText: 'Du kannst dich nun mit deiner Mailadresse und deinem Passwort einloggen und die Seite nutzen',
			missingEmailConfirm: 'Deine primäre Mailadresse ist allerdings noch nicht bestätigt. Bitte klicke auf den Link in der entsprechenden Email oder fordere eine neue Bestätigungsmail an (über das Login-Menü).',
			missingDfvOptIn: 'Deine beim DFV hinterlegte Mailadresse ist allerdings noch nicht bestätigt. Bitte klicke auf den Link in der entsprechenden Email oder fordere eine neue Bestätigungsmail an (über das Login-Menü).',
			changePassword: 'Passwort ändern',
			successPasswordChangedTitle: 'Passwort erfolgreich geändert',
			successPasswordChangedText: 'Du kannst dich nun mit deiner Emailadresse und dem neuen Passwort einloggen.',
		},

		event: {
			list: {
				title: 'Turniere',
			},
			youAreEventAdmin: 'Du bist Administrator dieses Turniers',
			youAreFormatAdmin: 'Du bist Administrator dieses Turnierformats',
			email: {
				title: 'Nachricht an die Teams',
				buttonLabel: 'Email an Teams',
				description: 'Wähle aus, welchen Gruppen von Teams deines Turniers {{ eventName }} du schreiben möchtest und verfasse die Nachricht.',
				status: 'Anmeldestatus',
				statusCONFIRMED: 'Bestätigt',
				statusPENDING: 'Unbestätigt',
				statusWAITING_LIST: 'Warteliste',
				statusDECLINED: 'Abgelehnt',
				statusCANCELLED: 'Abgesagt',
			},
			contactButton: 'Veranstalter kontaktieren',
			matchday: 'Spieltag',
			registration: 'Anmeldung',
			registrationIsOverSince: 'Die Anmeldung ist geschlossen seit dem',
			registrationStartsAt: 'Die Anmeldung beginnt am',
			registrationEndsAt: 'Die Anmeldung ist offen bis zum',
			registrationUndefined: 'Es gibt keine Informationen zur Anmeldung',
			register: {
				notLoggedIn: 'Bitte anmelden, um ein Team zu registrieren.',
				noOwnTeam: 'Zur Anmeldung bitte zuerst ein Team unter "Meine Teams" anlegen.',
				title: 'Team anmelden',
				description: 'Um dein Team anzumelden, fülle bitte die folgenden Felder aus. Mit Sternchen (*) gekennzeichnete Felder müssen ausgefüllt werden.',
				teamAlreadyInDivision: 'Dieses Team ist bereits in dieser Division registriert.',
				teamSuccessfullyRegisteredTitle: 'Registrierung erfolgreich!',
				teamSuccessfullyRegistered: 'Dein Team {{ teamName }} wurde erfolgreich für dieses Turnier angemeldet.',
				newSubTeam: 'Ein weiteres Team zu {{ teamName }} hinzufügen',
				nameAdditionPlaceholder: '2 oder II',
				nameAdditionHelpText: 'Gib eine Namenserweiterung für dein Team ein (z.B. 2 für ein zweites Team). Verschiedene Altersstufen und Divisionen werden automatisch benannt.',
				nameAdditionEmpty: 'Es wurde keine Namenserweiterung angegeben. Bitte ergänze diese im Eingabefeld oder klicke auf \'Abbrechen\', um ein Team aus der Liste auszuwählen.',
				rosterDuplicated: 'Es existiert bereits ein Eintrag mit dieser Namenserweiterung. Bitte klicke auf \'Abbrechen\' und wähle ihn aus der Liste aus.',
				division: 'Division',
				roster: 'Roster',
				button: 'Anmelden',
				comment: 'Nachricht',
				commentPlaceholder: 'Hinterlasse eine Nachricht an die Organisatoren, wenn du willst...',
			},
			editionViewDivisions: 'Divisionen',
			editionViewEvents: 'Termine',
			noEvents: 'Es stehen noch keine Termine fest',
			noDivisions: 'Es sind noch keine Divisionen festgelegt',
			organizer: 'Ausrichter',
			localOrganizer: 'Veranstalter vor Ort',
			linkToMaps: 'Google Maps Link',
			spotsAvailable: 'Plätze',
			spotsApplied: '{numApplications, plural, =0{Keine Anmeldungen} 	one{Eine Anmeldung} other{# Anmeldungen}}',
			fee: {
				label: 'Kosten',
				team: 'Teamfee',
				player: 'Playersfee',
				guest: 'Gast',
				breakfast: 'Frühstück',
				lunch: 'Mittagessen',
				dinner: 'Abendessen',
				night: 'Nacht',
				perUnit: 'pro',
				perPerson: 'p.P.',
				editionLabel: 'Für alle Termine von',
				matchdayLabel: 'Für diesen Termin',
			},
			resourcesLabel: 'Dokumente',
			rosterNotFixed: 'Roster der Saison',
			rosterFixed: 'Roster zum Zeitpunkt des Turniers',
			rosterEditOnTeamPage: 'Das Roster kann auf der Teamseite bearbeitet werden',
			printRosterNotFixed: 'Spielerlisten (offen) zum Zeitpunkt',
			printRosterFixed: 'Spielerlisten (fest) zum Zeitpunkt des Turniers',
			datePlayerAdded: 'Hinzugefügt am',
			teamList: {
				noTeams: 'Noch keine Teams angemeldet',
				title: 'Teams',
				confirmed: 'Bestätigt',
				pending: 'Angemeldet (unbestätigt)',
				waiting_list: 'Warteliste (unsortiert)',
				declined: 'Nicht dabei',
				printPlayerLists: 'Spielerlisten drucken',
				sortByName: 'Name',
				sortByNameTooltip: 'Nach Name sortieren',
				sortByResult: 'Platzierung',
				sortByResultTooltip: 'Nach Ergebnis sortieren',
				sortBySpirit: 'Spirit',
				sortBySpiritTooltip: 'Nach der Spirit-Wertung sortieren',
				standing: 'Platzierung',
				spiritScore: 'Spirit Bewertung',
				ownSpiritScore: 'Eigene Spirit Bewertung',
				standingExplanation: 'Stand nach dem letzten Turnier der Serie: {{ eventName }}',
				acceptTeam: 'Anmeldung bestätigen',
				waitlistTeam: 'Anmeldung auf die Warteliste setzen',
				declineTeam: 'Anmeldung ablehnen',
				editStandings: 'Ergebnisse bearbeiten',
				createStandings: 'Ergebnisse eintragen',
				doneEditStandings: 'Ergebnisse speichern',
				standingsRank: 'Platzierung',
				standingsSpirit: 'Spirit (Fremd/Eigen)',
				notQualified: 'Nicht qualifiziert',
				notQualifiedTooptip: 'Das Team hat sich auf diesem Qualifikationsturnier nicht für ein weiteres Turnier qualifiziert (Roster wird freigegeben)',
			},
		},

		team: {
			list: {
				title: 'Teams',
				own: 'Meine Teams',
				all: 'Alle Teams',
				save: 'Team speichern',
			},
			foundingDate: 'Gegründet',
			admins: 'Admins',
			action: {
				youAreTeamAdmin: 'Du bist Administrator dieses Teams',
				edit: 'Team bearbeiten',
				create: 'Neues Team erstellen',
			},
			roster: {
				label: 'Aktuelle Roster',
				newRoster: 'Roster hinzufügen',
				editRoster: 'Roster bearbeiten',
				divisionAgeLabel: 'Division',
				nameAdditionLabel: 'Ergänzung zum Teamnamen',
				nameAdditionHelp: 'Um Roster für weitere Teams in der selben Division zu erstellen, gib eine Ergänzung zum Teamnamen an (typischerweise \'2\' oder \'II\' für ein zweites Team). Verschiedene Altersgruppen (U17, ...) werden automatisch benannt.',
				contextLabel: 'Gültigkeitsbereich',
				contextHelp: 'Durch unterschiedliche Gültigkeitsbereiche können verschiede Roster für die gleiche Division und Saison angelegt werden, z.B.: für DFV Turniere oder Veranstaltungen eines Landesverbands.',
				contextPlaceholder: 'Gültigkeitsbereiche auswählen',
				noContext: 'Kein spezieller Gültigkeitsbereich',
				rosterNeedsContext: 'Das Roster muss einen Gültigkeitsbereich haben.',
				empty: 'Keine Spieler hinzugefügt',
				remove: 'Roster löschen',
				editTooltip: 'Roster Info bearbeiten',
				editPlayersTooltip: 'Spieler hinzufügen / löschen',
				confirmDelete: 'Soll dieses Roster wirklich gelöscht werden?',
				newPlayerPlaceholder: 'Name des Spielers',
				playerAlreadyInRoster: 'Dieser Spieler ist bereits für diese Saison und Division bei {{ teamName }} gemeldet',
				playerWrongGender: 'Dieser Spieler ist aufgrund des angegebenen Geschlechts in dieser Division nicht startberechtigt. Ist diese Information fehlerhaft, wende dich an euren Vereinsadmin, um die Angabe beim DFV zu korrigieren.',
				playerWrongAge: 'Dieser Spieler ist aufgrund seines Alters in dieser Division in diesem Jahr nicht spielberechtigt. Ist diese Information fehlerhaft, wende dich an euren Vereinsadmin, um die Angabe beim DFV zu korrigieren.',
				playerBlocked: 'Dieser Spieler war Teil dieses Rosters während eines offiziellen Turniers. Er ist für diese Saison festgespielt und kann nicht entfernt werden.',
				rosterBlocked: 'Das Team ist über dieses Roster bei einem oder mehreren Turnieren gemeldet, daher kann es nicht gelöscht werden.',
				rosterDuplicated: 'Es existiert bereits ein Roster für die gleiche Saison und Division mit der gleichen Ergänzung zum Teamnamen und mit überlappenden Gültigkeitsbereichen.',
				removePlayerTooltip: 'Spieler aus Roster entfernen',
				player: 'Spieler',
				players: 'Spieler',
				notLoggedIn: 'Spieler sind nur für angemeldete Benutzer sichtbar',
				eligibleUntil: 'spielberechtigt bis',
			},
			edit: {
				deleteTeam: 'Team löschen',
				deletionFailed: 'Dieses Team kann nicht gelöscht werden, da es für mindestens ein Turnier angemeldet war oder ist.',
				deletionConfirm: 'Soll dieses Team wirklich gelöscht werden. Alle Roster werden entfernt. Dieser Vorgang kann nicht rückgängig gemacht werden.',
				introduction: 'Um ein Team zu erstellen fülle bitte die folgenden Felder aus. In einem Team können verschiedenen Divisionen und Altersklassen gemeinsam verwaltet werden (also beispielsweise Open und Damen Teams oder U14 und U17 Teams), wenn sie unter dem gleichen Namen antreten.',
				nameLabel: 'Name',
				namePlaceholder: 'Teamname',
				foundingDateLabel: 'Gründungsjahr',
				descriptionLabel: 'Beschreibung',
				descriptionPlaceholder: 'Ein paar Worte zum Team...',
				adminsPlaceholder: 'Name des Benutzers',
				adminsHelp: 'Nur registrierte Benutzer dieser Seite können Admins werden',
				adminsRemoveTooltip: 'Benutzer entfernen',
				emailsLabel: 'Zusätzliche Emailadressen',
				emailsPlaceholder: 'Email',
				emailsRemoveTooltip: 'Email entfernen',
				emailsHelp: 'Nachrichten an dieses Team werden außer den Admins auch an die angegebenen Emailadressen gesendet. Diese Adressen werden nicht öffentlich angezeigt.',
				urlLabel: 'Webseite',
				urlPlaceholder: 'www. ...',
				contactEmailLabel: 'Kontakt',
				contactEmailPlaceholder: 'Emailadresse (optional)',
				contactEmailHelp: 'Diese Adresse ist öffentlich einsehbar. Informationen von Turnierausrichtern und Anfragen an das Team werden außerdem an die unten angegebenen Admins und zusätzlichen Emailadressen gesendet.',
				twitterNameLabel: 'Twitter',
				twitterNamePlaceholder: 'Twittername',
				facebookUrlLabel: 'Facebook',
				facebookUrlPlaceholder: 'https://www.facebook.com/...',
				locationCityLabel: 'Stadt/Land',
				locationMissing: 'Bitte gib eine Stadt oder ein Land ein, um dein Team zuzuordnen.',
				clubLabel: 'Verein',
				clubPlaceholder: 'Name des Vereins',
			},
			remove: {
				tooltip: 'Team löschen',
			},
			contactButton: 'Team kontaktieren',
			confirmDelete: 'Soll dieses Team wirklich gelöscht werden? Dieser Vorgang kann nicht rückgängig gemacht werden!',
		},

		footer: {
			mainText: 'Entwickelt vom ultiCal-Team',
			emailContactText: 'Gib uns Feedback oder stelle Fragen',
			gitHubBugText: 'Berichte von Bugs',
			gitHubText: 'Schau dir den Code an',
			faqText: 'Häufige Fragen und Antworten',
			legalNotice: 'Impressum',
		},

		actionBar: {
			head: {
				loggedInAs: 'Angemeldet als {{ userName }}',
				notLoggedIn: 'Du bist nicht angemeldet',
			}
		},
		countries: {
			de: 'Deutschland',
			fr: 'Frankreich',
			ch: 'Schweiz',
			at: 'Österreich',
			nl: 'Niederlande',
			be: 'Belgien',
			dk: 'Dänemark',
			pl: 'Polen',
			it: 'Italien',
			uk: 'England',
			es: 'Spanien',
			gr: 'Griechenland',
			lu: 'Luxemburg',
			pt: 'Portugal',
			us: 'USA',
			jp: 'Japan',
			au: 'Australien',
		},

		currencySymbol: {
			EUR: '€',
			USD: '$',
			GBP: '£',
			CHF: 'CHF',
			CAD: '$',
			INR: '₹',
			AUD: '$',
			NZD: '$',
			BGN: 'лв',
			HRK: 'kn',
			CZK: 'Kč',
			DKK: 'kr.',
			HUF: 'Ft',
			ISK: 'Íkr',
			NOK: 'kr',
			PLN: 'zł',
			RON: 'lei',
			RUB: 'руб.',
			RSD: 'RSD',
			SEK: 'kr',
			TRY: 'TRY',
			UAH: '₴',
			CNY: '¥',
		},
};
TRANSLATIONS['de-at'] = TRANSLATIONS['de'];
