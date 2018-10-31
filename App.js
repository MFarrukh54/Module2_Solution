(function(){
    'use strict'
    
    var ShoppingListItems=[
        {name:"Cookies",quantity:"10"},
        {name:"Bottles",quantity:"5"},
        {name:"Cakes",quantity:"4"},
        {name:"Pizza",quantity:"3"},
        {name:"Burgers",quantity:"8"}
    ]
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service("ShoppingListCheckOffService",ShoppingListCheckOffService);
    
    //To Buy Controller
    ToBuyController.$inject=['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
      var buyCont=this;
      buyCont.itemIndex=0;
      var shoppingService=ShoppingListCheckOffService;
      buyCont.getBuyList=function (){
         var list= shoppingService.getBuyList();
         if(list.length===0){
             buyCont.Status="Everything is bought!";
         }
         else{
             buyCont.Status="";
         }
         return list;
      }
      buyCont.buyItem=function(indexItem){
      shoppingService.buyItem(indexItem);
      };
    }
    
    // Already Bought Controller
    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
       var boughtCont=this;
       var shoppingService =ShoppingListCheckOffService;
       boughtCont.getboughtList=function(){
           var list=shoppingService.getBoughtList();
           if(list.length===0){
            boughtCont.Status="Nothing bought yet.";
        }
        else{
            boughtCont.Status="";
        }
        return list;
       }
    }
    
    //Service
    function ShoppingListCheckOffService(){
        var service=this;
    
        var toBuyItems=[];
        toBuyItems=ShoppingListItems;
        var boughtItems=[];
        service.buyItem=function(itemIndex){
            var value=toBuyItems[itemIndex];
            boughtItems.push(value);
            toBuyItems.splice(itemIndex,1);
        };
        service.getBuyList=function(){
            return toBuyItems;
        }
        service.getBoughtList=function(){
            return boughtItems;
        }
        
    }
    })();