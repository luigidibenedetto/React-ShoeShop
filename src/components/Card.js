import React from "react";
import { PropTypes } from "prop-types";

import "./Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showCard: false,
    };
  }

  makeCardVisible() {
    this.setState({ showCard: true });
  }

  render() {
    const { title, products} = this.props;
    const { showCard } = this.state;

    
    return (
        <div className="container">
            {showCard ? (
              products.map((product) => {
                return (
                <div className="card">                 
                    <img src={product.image} alt={title} />
                    <h3>{product.title}</h3> 
                </div>
                );
              })
            ) : (
              <button onClick={() => this.makeCardVisible()}>
                Show products
              </button>
            )}
        
        </div>
    )
  }  
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  products: PropTypes.array
};

export default Card;
