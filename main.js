import { createfooter } from './public/components/footer/footer'
import { createheader } from './public/components/header/header'
import { about } from './public/page/about/about'
import './style.css'

window.onload = function () {
  document.body.style.backgroundImage = "url('./assets/sunny.jpg')"
  document.body.style.backgroundRepeat = 'no-repeat'
  document.body.style.backgroundSize = 'cover'
}

createheader()
about()
createfooter()
