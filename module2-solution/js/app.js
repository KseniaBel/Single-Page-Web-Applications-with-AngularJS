(function(){
  'use strict';

 angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


//LIST1 - Controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;

  list1.items = ShoppingListCheckOffService.getItemsToBuy();

  list1.moveItems = function (itemIndex) {
    ShoppingListCheckOffService.moveItems(itemIndex);
  };
}

//LIST2 - Controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;

  list2.items = ShoppingListCheckOffService.getItemsBought();
}

//Service
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items_buy = [
    {name: "cookies", quantity: 10}, 
    {name: "tomatoes", quantity: 20},
    {name: "water", quantity: 1},
    {name: "cabage", quantity: 8},
    {name: "potatoes", quantity: 10}
  ];

  // List of bought items
  var items_bought = [];

  service.getItemsToBuy = function () {
    return items_buy;
  };

  service.getItemsBought = function () {
    return items_bought;
  };

  service.moveItems = function (itemIndex) {
      var item = items_buy[itemIndex];
      items_bought.push(item);
      items_buy.splice(itemIndex, 1);
  };
}

})();