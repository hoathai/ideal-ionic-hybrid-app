(function() {
    angular.module('RASworkspaces.services', [])
           .factory('S_defaultData', function() {
        var defaultData = {};
        
        
        
        return {
            get: function(whichKey, whichFurtherKeys) {
                if(whichFurtherKeys === undefined) {
                    whichFurtherKeys = [];
                }
                
                var resultingData = defaultData[whichKey];
                
                for(var i = 0; i < whichFurtherKeys.length; i++) {
                    resultingData = resultingData[whichFurtherKeys[i]];
                }
                
                return resultingData;
            },
            data: function() {
                return defaultData;
            }
        };
    })
           
           
           
           
           
           .factory('S_localStorage', function() {
        var appVersion = "v0.0.1";
        
        if(window.localStorage["appVersion"] !== appVersion) {
            // ### Do new things if new app version
            
            // Update localStorage appVersion to latest
            window.localStorage["appVersion"] = appVersion;
        }
        
        var userData = {
            appVersion: window.localStorage["appVersion"]
        };
        
        
        
        return {
            get: function(whichKey, whichFurtherKeys) {
                if(whichFurtherKeys === undefined) {
                    whichFurtherKeys = [];
                }
                
                var resultingData = userData[whichKey];
                
                for(var i = 0; i < whichFurtherKeys.length; i++) {
                    resultingData = resultingData[whichFurtherKeys[i]];
                }
                
                return resultingData;
            },
            getOne: function(whichKey, whichSubkey) {
                return userData[whichKey][whichSubkey];
            },
            set: function(whichKey, whichValue) {
                userData[whichKey] = whichValue;
                
                window.localStorage[whichKey] = JSON.stringify(whichValue);
            },
            setOne: function(whichKey, whichSubkey, whichValue) {
                userData[whichKey][whichSubkey] = whichValue;
                
                window.localStorage[whichKey] = JSON.stringify(userData[whichKey]);
            },
            delete: function(whichKey, baseValue) {
                delete userData[whichKey];
                
                userData[whichKey] = baseValue;
                
                window.localStorage[whichKey] = JSON.stringify(userData[whichKey]);
            },
            deleteOne: function(whichKey, whichSubkey) {
                delete userData[whichKey][whichSubkey];
                
                window.localStorage[whichKey] = JSON.stringify(userData[whichKey]);
            },
            data: function() {
                return userData;
            }
        };
    })
    
    
    
    
    
           .factory('S_globalFlags', function() {
        var currentGlobalFlag = {
            deviceIsReady: false
        };
        
        
        
        document.addEventListener("deviceready", function() {
            currentGlobalFlag["deviceIsReady"] = true;
        }, false);
        
        
        
        return {
            get: function(whichKey) {
                return currentGlobalFlag[whichKey];
            },
            set: function(whichKey, whichValue, whichCallback) {
                if(whichCallback === undefined) {
                    whichCallback = function(){};
                }
                
                currentGlobalFlag[whichKey] = whichValue;
                
                whichCallback();
            },
            delete: function(whichKey, baseValue) {
                delete currentGlobalFlag[whichKey];
                
                currentGlobalFlag[whichKey] = baseValue;
            },
            data: function() {
                return currentGlobalFlag;
            }
        };
    });
})();
