import React from 'react';  
import {PropTypes} from "prop-types";
import Product from './components/Product';
import './Body.css';

class Body extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showProducts: false,
        };
    }

    productsVisible() {
        this.setState({showProducts: true});
    }

    render() {
      const {cover, title, description, products} = this.props;
      const {showProducts} = this.state;
      return (
        <main>
          <img src={cover} alt="logo" />
          <h1>{title}</h1>
          <h2>{description}</h2>
          <div className="products-container">           
            {showProducts ? (
                products.map( (product) => {
                    return <Product image={product.image} title={product.title}/>
                })
                ) : (
                <button onClick={()=>this.productsVisible()}>
                    Show products
                </button>
                )
            }
          </div>
        </main>
      );    
    }
}
Body.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired
};

export default Body;