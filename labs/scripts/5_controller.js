var appModule = angular.module("appModule", ["providerModule"]);

appModule.config(["HospitalConfigurableServiceProvider", function(provider){
    provider.mode = "factory";
}]);
                 
appModule.controller("appController", ["$scope", "HospitalConfigurableService", function(s, factory) {
    s.hospitals = factory.get();
    //init blank scope model which is bound to input fields
    s.hospital = {};
    
    s.addHospital = function() {
        factory.add(s.hospital);
        
        //to reset fields
        s.hospital = {};
    }
}]);