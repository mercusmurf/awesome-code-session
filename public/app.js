(function(angular) {
  var app = angular.module('app', ['angular-chartist']);

  app.controller('appController', function($scope, $http) {
    var baseUrl = "https://api.rabarberjam.nl/v1/";
    // var exampleData = {
    //   "data": {
    //     "engagement": {
    //       "opened": 1,
    //       "sent": 2,
    //       "unsubscribed": 1,
    //       "failed": 2,
    //       "clicked": 4,
    //       "notsent": 3
    //     },
    //     "name": "Anne-Rose"
    //   }
    // };

    // Initializes the data to be empty
    this.donutData = {
        series: formatData({})
    };
    // configuration for Chartist
    this.params = {
      donut: true,
      showLabel: false,
      donutWidth: 30
    };

    // We're currently not getting the data, because it needws to be wrapped in
    //  a function named JSON_CALLBACK, by jsonp protocol and angular rules
    $http.jsonp(baseUrl+"contacts/309919/?field=name&field=engagement&callback=JSON_CALLBACK")
      .success(function(data) {
        this.donutData = {
          series: formatData(data["data"].engagement)
        };
      }).bind(this);
  })

  var formatData = function (values) {
    var total = 0;
    angular.forEach(values, function(val, key) {
      if (key != "notsent")
        total += val;
    });
    var result = [values.clicked, values.opened, values.failed, values.unsubscribed, values.sent];
    return total ? result.map(function (elem) {
      return Math.floor(elem/total * 100);
    }) : [0,0,0,0,0];
  };

})(angular)
