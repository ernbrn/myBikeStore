(function () {
  angular.module('bikeStore')
  .controller('RecumbentBikeController', function() {
    this.header = "Recumbent Bikes";

    this.bikes = [
      {
        img: "http://www.recumbentbikesdenver.com/images/trikes/WizWheel/ttrside.jpg",
        name: 'Wayback Layback',
        manufacturer: 'LeanTo',
        price: '$500'
      },
      {
        img: "http://www.bicycle-and-bikes.com/image-files/klassik-recumbent-bicycles.jpg",
        name: 'Blue Beauty',
        manufacturer: 'Wayback Layback',
        price: '$350'
      },
    ];

  });
})()
