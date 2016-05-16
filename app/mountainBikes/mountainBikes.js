(function () {
  angular.module('bikeStore')
  .controller('MountainBikeController', function() {
    this.header = "Mountain Bikes";

    this.bikes = [
      {
        img: "http://trek.scene7.com/is/image/TrekBicycleProducts/2139600_2016_A_1_Top_Fuel_9_9_SL?wid=680&hei=680&fmt=png8-alpha&qlt=80,1&op_usm=0,0,0,0&iccEmbed=0&cache=on,on&extend=0,0,0,450&origin=0,0",
        name: 'Top Fuel 9.9 SL',
        manufacturer: 'Trek',
        price: '$400'
      },
      {
        img: "http://trek.scene7.com/is/image/TrekBicycleProducts/1194600_2016_A_1_Slash_9_8_27_5?wid=680&hei=680&fmt=png8-alpha&qlt=80,1&op_usm=0,0,0,0&iccEmbed=0&cache=on,on&extend=0,0,0,450&origin=0,0",
        name: 'Top Fuel 11.1 SL',
        manufacturer: 'Trek',
        price: '$500'
      },
    ];

  });
})()
