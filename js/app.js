//memory section 
const memory = document.getElementById('memory16');
memory.addEventListener('click', function(){
  document.getElementById('memory-cost').innerText = '180'

});

const memory2 = document.getElementById('memory8');
memory2.addEventListener('click', function(){
  document.getElementById('memory-cost').innerText = '0' ;
});

//storage 
//256gb
const storage = document.getElementById('storage256');
storage.addEventListener('click', function(){
  document.getElementById('storage-cost').innerText = '0'
});

//512gb
const storagee = document.getElementById('storage512');
storagee.addEventListener('click', function(){
  document.getElementById('storage-cost').innerText = '100'
});

//1tb
const lastStorage = document.getElementById('storage1tb');
lastStorage.addEventListener('click', function(){
  document.getElementById('storage-cost').innerText = '180';
});

//delivery section

const freeDelivery = document.getElementById('free-delivery');
freeDelivery.addEventListener('click', function(){
  document.getElementById('delivery-const').innerText = '0' ;
});

const delivery = document.getElementById('delivery');
delivery.addEventListener('click',function(){
  document.getElementById('delivery-const').innerText = '20'
});



const bestPrice = document.getElementById('best-price').innerText

const memoryCost = document.getElementById('memory-cost').innerText;

const storageCost = document.getElementById('storage-cost').innerText;

const deliveryConst = document.getElementById('delivery-const').innerText;

let totalPrice = document.getElementById('total-price').innerText;

totalPrice = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryConst);
console.log(parseInt(totalPrice ));






