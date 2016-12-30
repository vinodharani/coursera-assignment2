(function () {
  'use strict';

  var shoppingList = [
    {
      name: 'Cookies',
      quantity: '10 bags'
    },
    {
      name: 'Chips',
      quantity: '5 bags'
    },
    {
      name: 'Soda',
      quantity: '10 bottles'
    },
    {
      name: 'Ice Cream',
      quantity: '7 buckets'
    },
    {
      name: 'Pepperoni Pizza',
      quantity: '4 pies'
    },
    {
      name: 'Nachos',
      quantity: '3 bags'
    },
    {
      name: 'Salsa',
      quantity: '3 bowls'
    },
    {
      name: 'Chocolate Bars',
      quantity: '15 bars'
    },
    {
      name: 'Cheese Puffs',
      quantity: '4 bags'
    },
    {
      name: 'Beer',
      quantity: '2 kegs'
    }
  ];

  angular.module('ShoppingListCheckOff', [])
          .controller('ToBuyController', ToBuyController)
          .controller('AlreadyBoughtController', AlreadyBoughtController)
          .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyCtrl = this;
    toBuyCtrl.listOfItems = shoppingList;

    toBuyCtrl.bought = function (index) {
      ShoppingListCheckOffService.bought(index, toBuyCtrl.listOfItems);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtCtrl = this;

    boughtCtrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var boughtItems = [];

    service.bought = function (itemIndex, listOfItems) {
      boughtItems.push(listOfItems[itemIndex]);
      listOfItems.splice(itemIndex, 1);
    };

    service.getBoughtItems = function () {
      return boughtItems;
    }
  }
})();
