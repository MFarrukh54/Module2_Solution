!function(){"use strict";var t=[{name:"Cookies",quantity:"10"},{name:"Bottles",quantity:"5"},{name:"Cakes",quantity:"4"},{name:"Pizza",quantity:"3"},{name:"Burgers",quantity:"8"}];function e(t){var e=this;e.itemIndex=0;var n=t;e.getBuyList=function(){var t=n.getBuyList();return 0===t.length?e.Status="Everything is bought!":e.Status="",t},e.buyItem=function(t){n.buyItem(t)}}function n(t){var e=this,n=t;e.getboughtList=function(){var t=n.getBoughtList();return 0===t.length?e.Status="Nothing bought yet.":e.Status="",t}}angular.module("ShoppingListCheckOff",[]).controller("ToBuyController",e).controller("AlreadyBoughtController",n).service("ShoppingListCheckOffService",function(){var e=this,n=[];n=t;var i=[];e.buyItem=function(t){var e=n[t];i.push(e),n.splice(t,1)},e.getBuyList=function(){return n},e.getBoughtList=function(){return i}}),e.$inject=["ShoppingListCheckOffService"],n.$inject=["ShoppingListCheckOffService"]}();