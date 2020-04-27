import React,{Component} from 'react'
import {Clear} from '@material-ui/icons'
import {Card,ListGroup,Button} from 'react-bootstrap'
import '../../assets/csss/cartTotal.css'

class CartTotals extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Card className="mainCard">
                <Card.Header className="headCard">Cart Totals</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item className="subHeadCont"><div className="subHead">Subtotal : </div><div className="subHead2">&#x20b9;{this.props.subTotal}</div></ListGroup.Item>
                    <ListGroup.Item className="subHeadCont"><div className="subHead">Shipping : </div><div className="subHead2">Free shipping</div></ListGroup.Item>
                    <ListGroup.Item className="subHeadCont"><div className="subHead">Total : </div><div className="subHead2">&#x20b9;{this.props.subTotal}</div></ListGroup.Item>
                    <ListGroup.Item className="btnCheck">Proceed to Check Out</ListGroup.Item>
                </ListGroup>
            </Card>
        )
    }
}

export default CartTotals;