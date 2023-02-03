let prevActive = 0
const images = document.getElementsByClassName('image')

const changeNextID = () => {

  let active = prevActive + 1

  if (active == images.length) {
    prevActive = 0

    images[active - 1].classList.replace('imageShown', 'imageNotShown')

    active = prevActive + 1

    images[prevActive].classList.replace('imageNotShown', 'imageShown')

  } else {

    images[prevActive].classList.replace('imageShown', 'imageNotShown')
    images[active].classList.replace('imageNotShown', 'imageShown')

    prevActive += 1
  }
}