import createElement from './create-element';

const navitems = [
  {
    id: 'home',
    name: 'Home'
  },
  {
    id: 'menu',
    name: 'Menu'
  },
  {
    id: 'contact',
    name: "Contact"
  }
]


export default function createHeader(){

  const header = createElement('header', 'header')
  for (let i=0; i < navitems.length; i++ ){
    const navItem = createElement('div', 'nav-item', `${navitems[i].name}`)
    navItem.setAttribute('id', navitems[i].id)
    header.appendChild(navItem)
  }
  return header
}



