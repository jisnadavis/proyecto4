import { about } from '../page/about/about'
import { education } from '../page/education/education'
import { hobby } from '../page/hobby/hobby'
import { projects } from '../page/mywork.js/myproject'

export const mainheaderdata = [
  {
    texto: 'About me',
    url: '#aboutme',
    page: about,
    class: 'blue'
  },
  {
    texto: 'Education',
    url: '#education',
    page: education,
    class: 'yellow'
  },
  {
    texto: 'projectos',
    url: '#projectos',
    page: projects,
    class: 'pink'
  },
  {
    texto: 'hobbys',
    url: '#hobbys',
    page: hobby,
    class: 'orange'
  }
]
