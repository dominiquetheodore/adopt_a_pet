const dogs = document.querySelectorAll('.dog');

dogs.forEach((dog) => dog.addEventListener('click', sayWoof));

function sayWoof(){
    alert('WOOF!!:(');
}