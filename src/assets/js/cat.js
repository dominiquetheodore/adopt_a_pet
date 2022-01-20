const cats = document.querySelectorAll('.cat');

cats.forEach((cat) => cat.addEventListener('click', sayMeow));

function sayMeow(){
    alert('MEOWWW!!:(');
}