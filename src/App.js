import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CartComponent from './Components/CartComponent/CartScreen'
import ProductComponent from './Components/ProductComponent/ProductScreen'
import {Navbar,Badge} from 'react-bootstrap'
import {ShoppingCart} from '@material-ui/icons'
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
  productList : [],
  selectedProducts:[]
}

class App extends Component{

  constructor(props){
    super(props);
    this.state = initialState;
  }

  componentWillMount() {
    document.title = 'EStore'
  }

  getProducts = (productLists) =>{
    this.setState({productList:productLists})
  }

  addProduct = (product)=>{
    let pList = this.state.selectedProducts;
    pList.push(product);
    this.setState({selectedProducts:pList})
  }

  removeProduct = (index) =>{
    // console.log(index)
    let pList = this.state.selectedProducts;
    let newList = [];
    for(let i=0;i<pList.length;i++){
      if(i!=index){
        newList.push(pList[i]);
      }
    }
    // console.log(pList)
    this.setState({selectedProducts:newList})
  }

  render(){
    // console.log(this.state)
    return (
      <div className="App" >
        <Router>
          <Navbar style={{"background":"#007bff"}}>
          <Link to="/"><Navbar.Brand  style={{color: "#fff",fontFamily:"Montserrat,sans-serif","lineHeight": "44px","fontWeight":"700",fontSize:"1.8rem"}}> Shop.</Navbar.Brand></Link>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end ">
              <Navbar.Text  style={{marginRight:"3%"}}>
                <Link to="/Cart"><ShoppingCart className="cartIcon" style={{color:"#FFCE00",fontSize: "2.0rem"}}/></Link>
                <Badge style={{background:"rgba(0,0,0,0.3)",color:"white"}}>{this.state.selectedProducts.length}</Badge>
              </Navbar.Text> 
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/Cart">
              <CartComponent selectedProducts={this.state.selectedProducts} removeProduct={this.removeProduct}/>
            </Route>
            <Route path="/">
              <ProductComponent setproducts ={this.getProducts} productList={this.state.productList} addProduct={this.addProduct}/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
