import createElement from "./create-element";

export default function createFooter(){
  const footer = createElement('footer', 'footer')

  const menu = createElement('a', 'menu-credits', 'Menu photos by unsplash')
  menu.href = 'https://unsplash.com/s/photos/restaurant'
  const photo = createElement('a', 'photo-credits', 'Banner by Jason Leung')
  photo.href =  'https://unsplash.com/photos/poI7DelFiVA'
  const terwebs = createElement('a', 'github-credit', 'Created by Ter_Webs')
  terwebs.href = "https://github.com/terwebs"

  footer.append(menu, photo, terwebs)
  return footer
}