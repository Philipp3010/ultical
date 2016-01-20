'use strict';

//nav bar controller
app.controller('NavBarCtrl', ['$scope', 'CONFIG', '$filter', '$translate', '$state', 'authorizer', 'amMoment',
                              function($scope, CONFIG, $filter, $translate, $state, authorizer, amMoment) {

	$scope.logoSide = "front";

	$scope.toggleLogoFlip = function(){
		"toggle two";
		$scope.logoSide = toggle($scope.logoSide);
	}
	function toggle(value){
		if(value === "front"){
			return "back";
		}
		else {
			return "front";
		}
	}

	$scope.loggedIn = function() {
		return authorizer.loggedIn();
	}

	$scope.getUser = function() {
		return authorizer.getUser();
	}

	/* *** Menu ***/
	$scope.eventDropdown =
		[{
			'text': $translate.instant('nav.eventDropdown.newEvent'),
			'href': $state.href('editionEdit', { eventId: 'new' }),
		},
		{
			'divider': true
		},
		{
			'text': $translate.instant('nav.eventDropdown.listEvents'),
			'href': $state.href('eventsList'),
		},
		];

	$scope.createEvent = function() {
		console.log("Create an event");
	};

	$scope.profileDropdown =
		[{
			'text': $translate.instant('nav.profileDropdown.ownTeams'),
			'click': 'goTo("teamsOwn")',
		},
		{
			'text': $translate.instant('nav.profileDropdown.ownEvents'),
			'href': $state.href('eventsList'),
		},
		{
			'divider': true
		},
		{
			'text': $translate.instant('nav.profileDropdown.logout'),
			'click': 'logOut()',
		}];

	$scope.goTo = function(stateName) {
		$state.go(stateName);
	};

	$scope.logOut = function() {
		authorizer.logOut();
		$state.reload();
	};

	/* *** Language Selector ****/
	$scope.selectedLanguage = $translate.use().toUpperCase();

	// initialize and fill language list
	$scope.languageSelector = [];
	angular.forEach(CONFIG.general.availableLanguages, function(languageCode, idx) {
		$scope.languageSelector.push(
				{
					'text': $filter('capitalize')(CONFIG.general.availableLanguagesFull[idx]),
					'click': "setLanguage('"+languageCode+"')",
				});
	});

	$scope.setLanguage = function(languageCode) {
		var oldLanguage = $translate.use();
		$translate.use(languageCode.toLowerCase())
		.then(function(key) {
			if (oldLanguage != key) {
				$scope.selectedLanguage = key.toUpperCase();
				amMoment.changeLocale(key.toLowerCase());
				$state.reload();
			}
		});
	}

}]);
