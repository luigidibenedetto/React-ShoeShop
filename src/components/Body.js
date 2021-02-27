<<<<<<< HEAD
import React from "react";
import { PropTypes } from "prop-types";

import "./Body.css";

class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showProducts: false,
    };
  }

  makeProductsVisible() {
    this.setState({ showProducts: true });
  }

  render() {
    const { cover, title, description, products } = this.props;
    const { showProducts } = this.state;

    return (
      <main className="Body">
        <img src={cover} alt={title} />
        <div className="content">
          <h1>{title}</h1>
          <h2>{description}</h2>
          {/* <div className="products-container">
            {showProducts ? (
              products.map((product) => {
                return <li>{product.title}</li>;
              })
            ) : (
              <button onClick={() => this.makeProductsVisible()}>
                Show products
              </button>
            )}
          </div> */}
        </div>
      </main>
    );
  }
}

Body.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};

export default Body;
=======
import React from 'react'   
import './Body.css';

class Body extends React.Component {
    render() {
        return <main>
                <img src={this.props.cover} alt="logo" />
                <h1>{this.props.title}</h1>
                <h2>{this.props.description}</h2>
               </main>
    }
}

export default Body;
>>>>>>> fbb88796f607c597c4863b99c48b30747738ef9f
