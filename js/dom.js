const price=document.getElementById('price').textContent;
const totalPrice=document.getElementById('total__price')
const mountInput=document.getElementById('mount');


mountInput.addEventListener('change',({target:{value}})=>{
    totalPrice.textContent=getTotalPrice(+price,+value);
})