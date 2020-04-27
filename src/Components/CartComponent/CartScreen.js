import React,{Component} from 'react';
import CartItem from './CartItem'
import CartTotals from './CartTotals'
import {Container,Row} from 'react-bootstrap'
import '../../assets/csss/cartTable.css'

class CartComponent extends Component{

  constructor(props){
      super(props);
  }  

  render(){
    let consSum = 0;
    let len = this.props.selectedProducts.length;
    const cartItems  = this.props.selectedProducts.map((prod,i)=>{
        consSum = consSum+prod.price;
        return <CartItem key={i} index={i} image={prod.display_image} title={prod.name} text={prod.price} subTotal={consSum} removeProduct={this.props.removeProduct}/>
    })
    return (
      <div className="conta">
            <h2>Shopping Cart</h2>
            <p>You have {this.props.selectedProducts.length} items in your Shopping Cart</p>
            <Container >
            <Row>
                <table className="items">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>SubTotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems}
                    </tbody>
                <tfoot>
                    <tr>
                        <td><b>Total</b></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><p>&#x20b9;{consSum}</p></td>

                    </tr>
                </tfoot>
                
                </table>
                
            </Row>
            <Row>
                <CartTotals subTotal={consSum}/>
            </Row>
            </Container>
            
      </div>
    );
  }
  
}

export default CartComponent;
