import './styles/index.scss';
import './favicons/favicons';

const userStack = {
  language: 'JavaScript',
  framework: 'Angular'
}

const user = {
  name: 'Ivan',
  age: '38',
  ...userStack
}

console.log(user)