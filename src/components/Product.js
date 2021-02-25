import React from 'react'

class Product extends React.Component {
  text() {
    return `${this.props.name} - €${this.props.price}`
  }
  render() {
    return <li>{this.text()}</li>;
  }
}

export default Product