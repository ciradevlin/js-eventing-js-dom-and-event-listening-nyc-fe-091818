//1. get the element 
const main = document.querySelector('main')

//2. Add event listener 

function onClick () {
  alert('i was clicked')
}

main.addEventListener('click', onClick)

function onKeyDown(event) {
  if (event.which === 74)
   event.preventDefault()
}

const input = document
      .querySelector('input')
      
  input.addEventListener('keydown', onKeyDown)
  
  const divs = document.querySelectorAll('div')
  console.log(divs)
  
  function onDivClick(event) {
    console.log(this.firstChild.nodeValue.trim() + ' bubbled')
  }
  
  for (let div of divs) { 
    div.addEventListener('click', onDivClick)
  }
  