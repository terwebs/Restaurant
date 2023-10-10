import createElement from './create-element';

export default function createHome(){
  
  const home = createElement('div', 'home')
  const homeTitle = createElement('h1', 'section-title', 'Welcome')
  const about = createElement('p', 'section-content', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias voluptas maiores, ullam non accusamus consectetur rem labore cupiditate quae et temporibus magnam illo natus! Qui atque deserunt aut soluta suscipit! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus architecto iste necessitatibus ratione illo itaque autem deserunt, quaerat rerum est quidem omnis voluptas accusamus voluptates, possimus, vitae dolor aspernatur veniam!')

  const hoursContainer = createElement('div', 'hours-container')
  const weekDays = createElement('h3', 'days', 'Monday - Saturday')
  const weekDaysHours = createElement('p', 'hours', '8:00 AM -  7:00 PM')

  const weekendDays = createElement('h3', 'days', 'Sunday')
  const weekendHours = createElement('p', 'hours', '8:00 AM -  12:00 PM')


  home.append(homeTitle, about,hoursContainer)  
  hoursContainer.append(weekDays, weekDaysHours, weekendDays, weekendHours)

  return home
}

