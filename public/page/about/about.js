import './about.css'
export const about = () => {
  const divApp = document.querySelector('#app')

  divApp.innerHTML = ``
  const aboutdiv = document.createElement('div')
  aboutdiv.className = 'aboutme'
  const proimg = document.createElement('img')
  proimg.className = 'proimage'
  proimg.src = './assets/profile.jpg'
  proimg.alt = 'profile'
  const prop = document.createElement('p')
  prop.textContent =
    'Me llamo Jisna y soy una mujer en mis treinta años con dos hermosas hijas. Mi vida gira en torno a disfrutar momentos con mi familia mientras persigo mis metas sin descanso. Recientemente, me embarqué en una emocionante aventura, mudándome de las vibrantes calles de la India a los paisajes encantadores de España. En medio de la transición cultural, encuentro alegría en abrazar nuevas experiencias y crear recuerdos duraderos con mis seres queridos. Mientras navego por este capítulo de mi vida, estoy impulsada por la determinación de cumplir mis aspiraciones mientras cultivo los vínculos que me atan a mis raíces.'
  aboutdiv.appendChild(proimg)
  aboutdiv.appendChild(prop)
  divApp.append(aboutdiv)
}
