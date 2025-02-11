import { data } from "./data.js"

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


let slide = document.querySelector('.slide')

data.forEach(({url, name, description}) => {
  slide.innerHTML += `
    <div class="item"
                    style="background-image: url(${url});">
                    <div class="content">
                        <div class="name">${name}</div>
                        <div class="des">${description}</div>
                        <button>See More</button>
                    </div>
                </div>
  `
})

