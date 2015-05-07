(function() {
    var isMobile = false;
    
    angular.module('IdealApp', ['ionic', 'IdealApp.controllers', 'IdealApp.services'])
           .controller('Base', function($scope, S_globalFlags) {
        console.log("### Controller - Base ###");
        
        S_globalFlags.set("MobileView", isMobile);
        
        var MobileView = S_globalFlags.get("MobileView");
        $scope.C_mView = MobileView;
        $scope.C_hdView = !MobileView;
    })
           .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    })
           .config(function($stateProvider, $locationProvider, $urlRouterProvider) {
        var templateFolderName = 'hd';
        
        if(isMobile) {
            templateFolderName = 'mobile';
        }
        
        $stateProvider.state('content', {
            url: "",
            abstract: true,
            views: {
                "header": {
                    templateUrl: 'templates/' + templateFolderName + '/header-base.html'
                },
                "content": {
                    templateUrl: 'templates/' + templateFolderName + '/content-base.html'
                }
            }
        })

                      .state('content.start', {
            url: '/',
            views: {
                'v-start': {
                    templateUrl: 'templates/' + templateFolderName + '/start.html',
                    controller: 'Start'
                }
            }
        })
                      .state('content.sample', {
            url: '/sample',
            views: {
                'v-sample': {
                    templateUrl: 'templates/' + templateFolderName + '/sample.html',
                    controller: 'Sample'
                }
            }
        });
        
        $urlRouterProvider.otherwise('/');
    });
})();
