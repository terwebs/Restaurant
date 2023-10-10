export default function createElement(element, className, innerText = '') {
  const newElement = document.createElement(`${element}`);
  newElement.classList.add(className);
  newElement.innerText = innerText
  return newElement
}