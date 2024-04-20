import { educations } from '../../data/education'
import './education.css'
export const education = () => {
  const divApp = document.querySelector('#app')

  divApp.innerHTML = ``
  const educatdiv = document.createElement('div')
  educatdiv.className = 'educatdiv'
  for (const item of educations) {
    const informdiv = document.createElement('div')

    informdiv.className = item.style
    informdiv.classList.add('informdiv')
    const eduimg = document.createElement('img')
    eduimg.src = item.url
    eduimg.className = 'eduimg'
    const nameh1 = document.createElement('h1')
    nameh1.textContent = item.degree
    const namep = document.createElement('h2')
    namep.textContent = item.major
    const infoh2 = document.createElement('h2')

    infoh2.textContent = item.university
    const year = document.createElement('h3')
    year.textContent = item.graduationYear
    informdiv.appendChild(eduimg)
    informdiv.appendChild(nameh1)
    informdiv.appendChild(namep)
    informdiv.appendChild(infoh2)
    informdiv.appendChild(year)
    educatdiv.appendChild(informdiv)
  }
  divApp.appendChild(educatdiv)
}
