var providerModule = angular.module("providerModule", ["appFactory", "serviceModule"]);

providerModule.provider("HospitalConfigurableService", [function() {
    this.mode = "factory";
    
    this.$get = ["hospitalFactory", "hospitalService", function(factory, service) {
      if (this.mode === "factory") {
          return factory;
      } else {
          return service;
      }
    }];
}]);