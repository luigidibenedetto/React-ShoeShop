/**
 * Classi in JavaScript
 * 
 * https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Classes
 * https://javascript.info/class
 */

class User {
  constructor(name, surname) {
    this.name = name
    this.surname = surname
  }

  sayHi() {
    console.log(this.number)
    console.log(`Hi, my name is ${this.name} ${this.surname}`)
  }

  render() {
    return <div>{this.name} {this.surname}</div>
  }
}

function fUser(props) {
  return {
    sayHi: () => console.log(`Hi, my name is ${props.name} ${props.surname}`)
  }
}

const giovanni = new User('Giovanni', 'Dorgali')
giovanni.sayHi()
const paolo = new User('Paolo', 'biraghi')
paolo.sayHi()

const luca = fUser('Luca', 'Mancini')
luca.sayHi()

class Ceact {
  constructor(p) {
    this.props = p
  }
}

class Product extends Ceact {
  print() {
    console.log(this.props.name);
  }
}

const RedShoe = new Product({ name: 'Red Shoe'})
RedShoe.print()
