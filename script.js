const check = document.querySelector(".togglesw:checked ~ .butto ");

check.onclick = () => {
    document.body.classList.toggle(`mood`);
    
};


// -------------------------------

const img1 = document.querySelector(".image img:nth-child(2)")
const img2 = document.querySelector(".image img:nth-child(3)")

const image = document.querySelector(".image")


window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    // console.log('Scroll position:', scrollPosition);
    if(scrollPosition >= 600 && scrollPosition <= 1245){
        img1.style.left = `${(scrollPosition - 600) / 19.8}%`
        img2.style.left = `${(scrollPosition - 600) / 9.8}%`
    }
    if(scrollPosition >= 1245){
        img1.style.left = `34%`
        img2.style.left = `66%`
    }

    image.style.height = `${img1.clientHeight}px`

  });

// ---------------------------------------------------

let next = document.querySelector('.img_img .next')
let prev = document.querySelector('.img_img .prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.img_img .item')
    document.querySelector('.img_img .slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.img_img .item')
    document.querySelector('.img_img .slide').prepend(items[items.length - 1]) // here the length of items = 6
})



// ------------------------------------

const box1 = document.querySelector(".scroll .scroll_img > div:nth-child(1)")
const box2 = document.querySelector(".scroll .scroll_img > div:nth-child(2)")
const box3 = document.querySelector(".scroll .scroll_img > div:nth-child(3)")
const box4 = document.querySelector(".scroll .scroll_img > div:nth-child(4)")


