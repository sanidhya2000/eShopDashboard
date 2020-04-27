import React,{Component} from 'react';
import '../../assets/csss/prodCard.css'
import { Button } from 'react-bootstrap';

class CardHeader extends React.Component {
    render() {
      const { image } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <header  id={image} className="card-header" style={{backgroundColor:"#fff"}}>
            <img src={this.props.image} className="imgTag"/>
            {this.props.flipImage == 'https://images.bewakoof.com/t320/'?
                null
            :
                <img src={this.props.flipImage} className="imgTagFlip"/>
            }
        </header>
      )
    }
  }

  class CardBody extends React.Component {
    render() {
        // console.log(this.props)
      return (
        <div className="card-body">
          
          
          <p className="titleText">{this.props.title}</p>
          
          
          
          
        </div>
      )
    }
  }

class ProductCard extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <article className="card">
                <CardHeader image={`https://images.bewakoof.com/t320/${this.props.image}`} flipImage={`https://images.bewakoof.com/t320/${this.props.flipImage}`}/>
                <CardBody 
                    title={this.props.title} 
                    text={this.props.text} 
                    index={this.props.index}
                    addProduct = {this.props.addProduct}
                />
                <div className="priceHold"> 
                    <p className="mainPrice">&#x20b9;{this.props.text}</p>
                    <p className="mrpPrice">&#x20b9;{this.props.mrpprice}</p>
                    <p className="offers">Save {this.props.offer}</p>
                </div>
                <Button onClick={()=>{this.props.addProduct(this.props.index)}} className=" addProd">Add to Cart</Button>
            </article>
        )
    }

}

export default ProductCard