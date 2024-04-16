import { mainheaderdata } from '../../data/mainheader'
import './header.css'

export const createheader = () => {
  const header = document.createElement('header')
  header.className = 'headercontainer'
  const nav = document.createElement('nav')
  const headerdiv = document.createElement('div')
  headerdiv.className = 'headerdiv'
  const ulcontainer = document.createElement('ul')
  ulcontainer.className = 'ulcontainer'
  mainheaderdata.forEach((link, index) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.href = link.url
    a.textContent = link.texto
    li.className = link.class
    li.appendChild(a)

    ulcontainer.appendChild(li)
  })
  headerdiv.appendChild(ulcontainer)
  nav.appendChild(headerdiv)
  header.appendChild(nav)
  document.body.appendChild(header)
  return header
}
