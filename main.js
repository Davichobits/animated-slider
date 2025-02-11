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

const cities = [
  {
    "url": "https://i.ibb.co/qCkd9jS/img1.jpg",
    "name": "Switzerland",
    "description": "X-Dev, Transforming code into visual poetry..!"
  },
  {
    "url": "https://i.ibb.co/jrRb11q/img2.jpg",
    "name": "Finland",
    "description": "X-Dev, Transforming code into visual poetry..!"
  },
  {
    "url": "https://i.ibb.co/NSwVv8D/img3.jpg",
    "name": "Iceland",
    "description": "X-Dev, Transforming code into visual poetry..!"
  },
  {
    "url": "https://i.ibb.co/Bq4Q0M8/img4.jpg",
    "name": "Australia",
    "description": "X-Dev, Transforming code into visual poetry..!"
  },
  {
    "url": "https://i.ibb.co/jTQfmTq/img5.jpg",
    "name": "Netherland",
    "description": "X-Dev, Transforming code into visual poetry..!"
  },
  {
    "url": "https://i.ibb.co/RNkk6L0/img6.jpg",
    "name": "Ireland",
    "description": "X-Dev, Transforming code into visual poetry..!"
  }
]

let slide = document.querySelector('.slide')

cities.forEach(({url, name, description}) => {
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

