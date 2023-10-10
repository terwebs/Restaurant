import createElement from "./create-element";

const contactinfo = {
  name: 'Webster Munoz',
  phone: '+505 8888 8888',
  email: 'totallylegitemail@notfake.com',
  address: '123 legit st Naria, Neverland'
}

export default function createContact(){

  const contact = createElement('div', 'contact')
  const contactTitle = createElement('h1', 'section-title', 'Contact us')
  contact.appendChild(contactTitle)

  const contactName = createElement('h2', 'section-text', `${contactinfo.name}`)
  const contactphone = createElement('h2', 'section-text', `${contactinfo.phone}`)
  const contactEmail = createElement('h2', 'section-text', `${contactinfo.email}`)
  const contactAddress = createElement('h2', 'section-text', `${contactinfo.address}`)

  contact.append(contactName, contactphone, contactEmail, contactAddress)
  return contact
}