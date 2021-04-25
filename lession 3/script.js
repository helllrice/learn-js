const text =  document.getElementById('elem');
const text2 = document.getElementById('elem1');
const block = document.getElementById('block');
const button = document.getElementById('button')


button.onclick = function () {
    block.innerText = text.value + text2.value
}

// задание 3

const array = ['aпельсин', 'мандарин'];
const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
const input = document.getElementById('elem3')

btn.onclick = function () {
    array.push(input.value)
    console.log(array)
}

btn2.onclick = function () {
  array.pop(input.value);
  console.log(array);
}




