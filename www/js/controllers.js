angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $cordovaMedia, $ionicModal, $timeout) {
    $scope.playing = true;
    $scope.songlist = [
      {id: 1, title: 'Izarrak in tha Hell', src: "mp3/1.mp3"},
      {id: 2, title: 'Supernoba', src: "mp3/2.mp3"},
      {id: 3, title: 'Soilik hitzak dira', src: "mp3/3.mp3"},
      {id: 4, title: 'XXXI', src: "mp3/4.mp3"},
      {id: 5, title: 'bien de', src: "mp3/5.mp3"},
      {id: 6, title: 'yonoolvidoelbarrio', src: "mp3/6.mp3"},
      {id: 7, title: 'zilarramaster', src: "mp3/7.mp3"}
    ];
    $scope.index = 0;
    $scope.selectedSong = function (value) {

      if (value == 1) {
        $scope.index -= 1;
        if ($scope.index < 0) {
          $scope.index = 6
        }
      }
      else {
        $scope.index += 1;
        if ($scope.index > 6) {
          $scope.index = 0
        }
      }
    }

    $scope.playPause = function () {
       $scope.playing = !$scope.playing;
       
      var ruta = "../" + $scope.songlist[$scope.index + 1].src;
      var media = new Media(ruta,null,null,mediaStatusCallback);
      media.play();
    };
    var mediaStatusCallback = function (status) {
      if (status == 1) {
        $ionicLoading.show({template: 'Loading...'});
      } else {
        $ionicLoading.hide();
      }
    }
    $scope.changeSong = function (id) {
      $scope.index = id - 1;
    }
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [
      {title: 'Reggae', id: 1},
      {title: 'Chill', id: 2},
      {title: 'Dubstep', id: 3},
      {title: 'Indie', id: 4},
      {title: 'Rap', id: 5},
      {title: 'Cowbell', id: 6}
    ];
  })

  .controller('PlaylistCtrl', function ($scope, $stateParams) {
  });
