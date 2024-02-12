import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Referanslar extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }
    
    componentDidMount() {
        fetch("./mac.json")
            .then(res => res.json())
            .then((x) => {
                this.setState({ products: x.products });
            });
    }
    
    render() {
        return (
            <div>
                <section className="internal-page-wrapper">
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-12">
                                <div className="title-wraper large">
                                    Referanslar
                                </div>
                            </div>
                        </div>
                        {this.state.products.map((product) => {
                            let id = product.Id;
                            let productPage = "/iphone/" + id;

                            return (
                                <div key={id} className="row product-holder">
                                    <div className="col-md-6">
                                        <div className="new-alert">
                                            {product.Alert}
                                        </div>
                                        <div className="monthly-price inch">
                                            {product.PriceRange}
                                        </div>
                                        <div className="product-title">
                                            {product.Title}
                                        </div>
                                        <div className="description-wraper">
                                            {product.Brief}
                                        </div>
										<div className="col-md-6">
                                        <div className="product-image">
                                            <img src={product.img} alt={product.Title} />
                                        </div>
                                    </div>
                                    </div>
                                  
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        );
    }
}

export default Referanslar;
