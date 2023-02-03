let cover = document.querySelectorAll('#cover')
let opts = document.querySelectorAll('.ops')
let imgs = document.querySelectorAll('#img')

// function to make the div appear and to set the other imgs opacity to 0, requires ints for postition of arrays
function animationsGeneral(b, c) {
  setTimeout(() => {
    imgs[b].animate({
      opacity: "0"
    }, {
      duration: 300,
      fill: "forwards",
      easing: "ease-in-out"
    })
    imgs[c].animate({
      opacity: "0"
    }, {
      duration: 300,
      fill: "forwards",
      easing: "ease-in-out"
    })
  }, 500)
}

// function to make the div cover the whole screen and stay invisible while it "loads", requires ints, one for array position and one for % of the div's position correction
function animationsCover(a, b) {
  document.body.style.overflow = 'hidden'

  cover[a].animate({
    position: 'absolute',
    width: '25px',
    height: '25px'
  }, {
    duration: 100,
    fill: 'forwards',
    easing: 'ease-in-out'
  })
  cover[a].animate({
    transform: `translateX(${b}%) scale(100)`
    
  }, {
    duration: 2500,
    fill: "forwards",
    easing: "ease-in-out"
  })
}

opts[0].addEventListener('click', () => {

  animationsCover(0, 26.67)
  animationsGeneral(1, 2)

  setTimeout(() => {
    location.href = "http://127.0.0.1:5500/select-anim/otherpage.html"
  }, 4000)
  
})

opts[1].addEventListener('click', () => {

  animationsCover(1, 0)
  animationsGeneral(0, 2)

  setTimeout(() => {
    location.href = "http://127.0.0.1:5500/select-anim/otherpage.html"
  }, 4000)
  
})

opts[2].addEventListener('click', () => {

  animationsCover(2, -26.67)
  animationsGeneral(0, 1)

  setTimeout(() => {
    location.href = "http://127.0.0.1:5500/select-anim/otherpage.html"
  }, 4000)
  
})
