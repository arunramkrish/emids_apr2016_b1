var factoryModule = angular.module("appFactory", ["serviceModule"]);

factoryModule.factory("hospitalFactory", ["hospitalService", function(service) {
   var hospitals = [];
    service.get(function(serverHospitals) {
        Array.prototype.push.apply(hospitals, serverHospitals);
    }, function() {
        hospitals = window.localStorage.getItem("hospitals");
        if (hospitals) {
            hospitals = JSON.parse(hospitals);
        } else {
            hospitals = [];
        }
    });
    
    function addHospital(hospital) {
        hospitals.push(hospital);
        window.localStorage.setItem("hospitals", JSON.stringify(hospitals));
    }
    
    function getHospitals() {
        return hospitals;
    }
    
    return {
      add : addHospital,
        get: getHospitals
    };
    
}]);