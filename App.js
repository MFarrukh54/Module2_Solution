(function(){
'use strict'

var ShoppingListItems=[
    {name:"Cookies",quantity:"10"},
    {name:"Cookies",quantity:"10"},
    {name:"Cookies",quantity:"10"},
    {name:"Cookies",quantity:"10"},
    {name:"Cookies",quantity:"10"}
]
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService);

//To Buy Controller
ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var buyCont=this;
  buyCont.itemIndex=0
  var shoppingService=ShoppingListCheckOffService;
  buyCont.getBuyList=shoppingService.getBuyList();
  buyCont.buyItem=function(indexItem){
  shoppingService.buyItem(indexItem);
  };
  buyCont.Empty=shoppingService.buyItemStatus();
  console.log("Value of empty",buyCont.Empty);
}

// Already Bought Controller
AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
   var boughtCont=this;
   var shoppingService =ShoppingListCheckOffService;
   boughtCont.getboughtList=shoppingService.getBoughtList();
}

function ShoppingListCheckOffService(){
    var service=this;

    var toBuyItems=[];
    toBuyItems=ShoppingListItems;
    var boughtItems=[];
    service.buyItem=function(itemIndex){
        boughtItems.push(toBuyItems.pop(itemIndex));
    };
    service.getBuyList=function(){
        return toBuyItems;
    }
    service.getBoughtList=function(){
        return boughtItems;
    }
    service.buyItemStatus=function(){
        if(toBuyItems===null){
            console.log("Not Work");
            // return null;
        }
        else {
            console.log("Work");
            return null;
            // return true;
        }
    }
}


})();