import { hobbies } from '../../data/hobby'
import './hobby.css'

export const hobby = () => {
  const divApp = document.querySelector('#app')

  divApp.innerHTML = ``
  const hobbydiv = document.createElement('div')
  hobbydiv.className = 'hobby'
  for (const item of hobbies) {
    const divhobby = document.createElement('div')
    divhobby.className = 'divhobby'
    const hobbyh1 = document.createElement('h1')
    hobbyh1.textContent = item.name
    const desh2 = document.createElement('h3')
    desh2.textContent = item.description
    const hobimg = document.createElement('img')
    hobimg.src = item.image
    divhobby.appendChild(hobimg)
    divhobby.appendChild(hobbyh1)
    divhobby.appendChild(desh2)
    hobbydiv.appendChild(divhobby)
  }
  divApp.appendChild(hobbydiv)
}
