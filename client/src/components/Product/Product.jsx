import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../cartActions';

class ProductPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: 0
        }
    }
    handleAdd = (name, price)=> {
        this.props.addToCart(name, price);
    };

    handleSelection = (name, price)=> {
        this.setState(
            {
                name: name,
                price: price
            });
    };

    render(){
        let product = this.props.items.map(item=>{
            return(
                <div className="container">
                    <div className="card-image">
                        <img src={item.image} alt={item.name} style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div className="card-right">
                        <h5 className="item-title">{item.name}</h5>
                        <p className="item-price"><b>${item.price}</b></p>
                        <p className="item-desc">{item.description}</p>
                        <br></br>

                        <button className="btn-add" onClick={() => this.handleAdd(this.state.name, this.state.price)}><b>ADD TO CART</b></button>
                    </div>
                </div>
            )
        });

        return(
            <div className="container">
                <div className="box">
                    {product}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        items: state.items
    }
};

const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (name, price)=>{dispatch(addToCart(name, price))}
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductPage);