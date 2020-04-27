import React,{Component} from 'react'
import {Clear} from '@material-ui/icons'
import {Badge} from 'react-bootstrap'

class CartItem extends Component{
    constructor(props){
        super(props)
    }
    remove=()=>{
        this.props.removeProduct(this.props.index)
    }

    render(){
        return(
            <tr>
                <td>
                    <Badge pill  variant="danger" style={{cursor:"pointer"}} onClick={this.remove}><Clear/></Badge>
                </td>
                <td>
                    <img  src={`https://images.bewakoof.com/t320/${this.props.image}`} height="200px" style={{width:"100%"}}/>
                </td>
                <td>
                    <p>{this.props.title}</p>
                </td>
                <td>
                    <p>&#x20b9;{this.props.text}</p>
                </td>
                <td>
                    <p>1</p>
                </td>
                <td>
                    <p>&#x20b9;{this.props.subTotal}</p>
                </td>
            </tr>
        )
    }
}

export default CartItem;