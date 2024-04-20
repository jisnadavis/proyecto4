import { myProjects } from '../../data/myworks'
import './myproject.css'
export const projects = () => {
  const divApp = document.querySelector('#app')
  divApp.innerHTML = ``
  const myworkdiv = document.createElement('div')
  myworkdiv.className = 'myworkdiv'

  for (const item of myProjects) {
    const myprojectdiv = document.createElement('div')
    myprojectdiv.className = 'myproject'
    const prhead = document.createElement('h1')
    prhead.textContent = item.title
    const prdes = document.createElement('h2')
    prdes.textContent = item.description
    const primg = document.createElement('img')
    primg.className = 'primg'
    primg.src = item.screenshot
    primg.alt = item.imgDescription
    const tech = document.createElement('h2')
    tech.textContent = item.technologies
    const buttondiv = document.createElement('div')
    buttondiv.className = 'buttondiv'
    const prgit = document.createElement('button')
    prgit.className = 'prgit'

    prgit.innerHTML = `<i class="fa-brands fa-square-github"></i>`
    prgit.addEventListener('click', () => {
      const pra = document.createElement('a')
      pra.href = item.gitHubUrl
      pra.target = '_blank'
      pra.click()
    })
    const prlive = document.createElement('button')
    prlive.className = 'prgit'

    prlive.innerHTML = `<i class="fa-brands fa-chrome"></i>`
    prlive.addEventListener('click', () => {
      const pral = document.createElement('a')
      pral.href = item.liveUrl
      pral.target = '_blank'
      pral.click()
    })
    myprojectdiv.appendChild(primg)
    myprojectdiv.appendChild(prhead)
    myprojectdiv.appendChild(prdes)

    myprojectdiv.appendChild(tech)
    myprojectdiv.appendChild(buttondiv)
    buttondiv.appendChild(prgit)
    buttondiv.appendChild(prlive)
    myworkdiv.appendChild(myprojectdiv)
  }
  divApp.append(myworkdiv)
}
