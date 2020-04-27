import React,{Component} from 'react';
import MainPanel from './MainPanel'
import FilterPanel from './FilterPanel'
import {Container,Row,Col} from 'react-bootstrap'
import '../../assets/csss/prodScreen.css'

class ProductComponent extends Component{

  constructor(props){
      super(props)
  }  
  render(){
    return (
      
            <div   className="cont">
                
                    <div className="col1" >
                        <FilterPanel 
                            setproducts ={this.props.setproducts} 
                            productList={this.props.productList} 
                        />
                    </div>
                    <div className="col2">
                        <MainPanel  
                            setproducts ={this.props.setproducts} 
                            productList={this.props.productList} 
                            addProduct={this.props.addProduct}
                        />
                            
                    </div>
                
            </div>
          
          
      
    );
  }
  
}

export default ProductComponent;
