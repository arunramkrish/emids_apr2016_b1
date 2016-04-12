var serviceModule = angular.module("serviceModule", []);

function HospitalService(http) {
    var hospitals = [];
    
    this.get = function(callback, errCallback) {
        http({
            method: 'GET',
            url: '/data/hospitals.json'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
            callback(response.data);
            
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
        errCallback();
  })
    };
    
    this.add = function(h) {
        hospitals.push(h);
        //missing server side interaction
    } ;
}

serviceModule.service("hospitalService", ["$http", HospitalService]);