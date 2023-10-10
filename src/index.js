import _ from 'lodash';
import './style.css'
import createHeader from './header.js'
import createHome from './home.js'
import createElement  from './create-element';
import createMenu from './menu';
import createContact from './contact';
import createFooter from './footer';

// import Banner from './tobi.jpg'

console.log("is this thing working?")

//create header

//create main container

//create footer
const container = document.querySelector('.container')

const banner = createElement('img', 'banner')
banner.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';
banner.classList.add('banner')
container.appendChild(banner)

const caption = createElement('h1', 'caption', `Tobi's Bistro`)
container.appendChild(caption)

const main = document.createElement('main')
main.classList.add('main')

container.appendChild(createHeader())
container.appendChild(main)
container.appendChild(createFooter())

main.appendChild(createHome())
main.appendChild(createMenu())
main.appendChild(createContact())


const homeNav = document.querySelector('#home')
const menuNav = document.querySelector('#menu')
const contactNav = document.querySelector('#contact')


const home = document.querySelector('.home')
const menu = document.querySelector('.menu')
const contact = document.querySelector('.contact')

menu.classList.add('hidden')
contact.classList.add('hidden')

function tab(){

  homeNav.addEventListener('click', (e)=> {
  console.log(e.target)
  menu.classList.add('hidden')
  home.classList.remove('hidden')
  })

  menuNav.addEventListener('click', (e)=> {
    console.log(e.target)
    home.classList.add('hidden')
    contact.classList.add('hidden')
    menu.classList.remove('hidden')
  })

  homeNav.addEventListener('click', (e)=> {
    console.log(e.target)
    menu.classList.add('hidden')
    home.classList.remove('hidden')
    contact.classList.add('hidden')
  })
  
    contactNav.addEventListener('click', (e)=> {
    console.log(e.target)
    home.classList.add('hidden')
    menu.classList.add('hidden')
    contact.classList.remove('hidden')
  })
}

tab()