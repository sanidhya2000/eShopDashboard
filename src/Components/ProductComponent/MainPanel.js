import React,{Component} from 'react';
import axios from 'axios';
import {prodData} from '../../assets/configApi'
import {Card,Button} from 'react-bootstrap'
import ProductCard from './productCard'

class MainPanel extends Component{

  constructor(props){
    super(props);
  }  

  componentDidMount(){
    this.props.setproducts(prodData)
  }

  addProduct = (index) =>{
      this.props.addProduct(this.props.productList[index]);
  }
  render(){
    const productList = this.props.productList.map((product,i)=>{
        let offer = (product.mrp-product.price)/product.mrp;
        offer = Math.ceil(offer*100);
        offer = offer+'%';
        return(
            <ProductCard 
                key = {i}
                index = {i}
                image={product.display_image} 
                title={product.name} text={product.price} 
                flipImage={product.flip_image} 
                addProduct={this.addProduct}
                offer = {offer}
                mrpprice = {product.mrp}
            />
        )
    })
    return (
     <div className="cont">
         
         {productList}

     </div>
    );
  }
  
}

export default MainPanel;
