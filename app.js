(function()
{
  'use strict';
  angular.module('shoppingListApp',[])
  .controller('shoppingListAppController',['$scope',shoppingListAppController]);
  function shoppingListAppController($scope)
  {
    var shoppingList=[
      {name:"milk",qty:"2"},{name:"oats",qty:"4"},{name:"cookies",qty:"5"},{name:"nuts",qty:"3"}
    ];
    $scope.shoppingListItems=shoppingList;
    

    $scope.addToList=function()
    {
      var newItemObject={
        name:$scope.newItem,
        qty:$scope.newQuantity
      };
      console.log("adding items to list...");
      console.log("",newItemObject);
      shoppingList.push(newItemObject);
      console.log("item successfully added...")
    };
  }
})();
