import createElement from "./create-element";
import mocca  from './images/mocca.jpg'
import capu  from './images/capuccino.jpg'
import cucake from './images/cupcake.jpg'
import { create } from "lodash";

const menuitems = [
  { 
    name: "mocca",
    text: "Indulge in the perfect harmony of espresso and chocolate with our signature Mocha. This luscious blend of freshly brewed espresso, velvety cocoa, and steamed milk creates a decadent masterpiece that's sure to satisfy your cravings",
    image: mocca,
    price: 2
  },
  { 
    name: "capuccino",
    text: 'Experience the timeless allure of Italy with our meticulously crafted Cappuccino. This beloved coffee classic starts with a shot of freshly brewed espresso, creating a robust foundation of bold flavor. We then expertly steam and froth our creamy milk to perfection, achieving the ideal balance of smoothness and foam.',
    image: capu,
    price: 2.5
  },
  { 
    name: "cupcake",
    text: 'The crowning glory of our Classic Cupcake is the creamy swirl of velvety buttercream frosting that sits like a fluffy cloud on top. Decorated with care and artistry, each cupcake is a miniature masterpiece, designed to delight your senses and brighten your day.',
    image: cucake,
    price: 1.5
  },
]

export default function createMenu(){
  const menu = createElement('div', 'menu')
  const homeTitle = createElement('h1', 'section-title', 'Our Menu')
  menu.appendChild(homeTitle)
  
  // iterate trough menu items to create the items in menu with their name, img and description
  for (let i=0; i < menuitems.length; i++ ){
    const itemContainer = createElement('div', 'item-container')

    const itemimg = createElement('img', 'item-image')
    itemimg.src = menuitems[i].image
    
    const itemDesc = createElement('div', 'item-description')

    const itemText = createElement('div', 'item-text', `${menuitems[i].text}`)
    const itemPrice = createElement('div', 'item-text', `$${menuitems[i].price}`)
    itemDesc.append(itemText, itemPrice)
    itemContainer.append(itemimg, itemDesc)
    menu.appendChild(itemContainer)


  }
  return menu
}