(function () {
  angular.module('bikeStore')
  .controller('HomeController', function () {
    this.contact = {
      open: '9am',
      close: '8pm',
      daysOpen: 'Monday - Friday',
      phone: '919-555-2342',
      email: 'bikeStore@hotmail.com'
    }

  });
})()
