import { mainheaderdata } from '../../data/mainheader'

import './header.css'

export const createheader = () => {
  const header = document.createElement('header')
  header.className = 'headercontainer'
  const nav = document.createElement('nav')
  const ulcontainer = document.createElement('ul')
  ulcontainer.className = 'ulcontainer'
  mainheaderdata.forEach((link) => {
    const li = document.createElement('li')

    const a = document.createElement('a')

    li.className = 'pages'
    a.href = link.url
    a.textContent = link.texto

    li.appendChild(a)
    ulcontainer.appendChild(li)

    a.addEventListener('click', () => {
      document.querySelectorAll('.pages a').forEach((anchor) => {
        anchor.classList.remove('active')
      })

      a.classList.add('active')

      link.page()
    })
  })
  const togglebutton = document.createElement('button')
  togglebutton.type = 'button'
  togglebutton.id = 'togglebutton'
  togglebutton.innerHTML = `<i class="fa-solid fa-sun"></i>`
  togglebutton.dataset.state = 'light'
  togglebutton.addEventListener('click', function () {
    if (this.dataset.state === 'light') {
      this.innerHTML = `<i class="fa-solid fa-moon"></i>`
      this.dataset.state = 'dark'
      document.body.style.background =
        "url('./assets/night.jpg') no-repeat center center / cover"
      document.body.style.height = '100%'
    } else {
      this.dataset.state = 'light'
      this.innerHTML = `<i class="fa-solid fa-sun"></i>`
      document.body.style.background =
        "url('./assets/sunny.jpg') no-repeat center center / cover"
      document.body.style.height = '100%'
    }
  })
  nav.appendChild(ulcontainer)
  header.appendChild(nav)
  nav.appendChild(togglebutton)

  document.body.appendChild(header)
  return header
}
