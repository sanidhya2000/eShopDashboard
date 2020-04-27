import React,{Component} from 'react';
import {prodData} from '../../assets/configApi'

import {Button} from 'react-bootstrap'
import '../../assets/csss/filterComponent.css'
import { Checkbox, FilledInput } from '@material-ui/core';

let initialState ={
    priceFilter :{
        condition : [
            {
                maxPrice:199,
                minPrice:100,
                status:false
            },
            {
                maxPrice:399,
                minPrice:200,
                status:false
            },
            {
                maxPrice:599,
                minPrice:400,
                status:false

            },
            {
                maxPrice:Infinity,
                minPrice:600,
                status:false

            }
        ]
    }
}

class FilterPanel extends Component{
    constructor(props){
        super(props);
        this.state = initialState;
    }

    componentDidMount(){
        // console.log("Mounting")
        let pfill = this.state.priceFilter;
        this.state.priceFilter.condition.map((fil)=>{
            fil.status = false;
        })
        this.setState({priceFilter:pfill})
        // console.log("Mounting",this.state)
    }

   toggleStatusFilter = (index) =>{
        let fils = this.state.priceFilter;
        fils.condition[index].status = !fils.condition[index].status;
        this.setState({priceFilter:fils});
   }
  
   applyFilter = ()=>{
       let productList = prodData;
    //    console.log(prodData)
       let removeProd = []
       productList.map((prod,i)=>{
        let flag = false,haveVal = false;
        this.state.priceFilter.condition.map((fil)=>{
            if(fil.status == true && flag==false){
                haveVal = true;
                if(prod.price>= fil.minPrice && prod.price <= fil.maxPrice){
                    flag=true;
                    // break;
                }
            }
        })
        if(flag == false && haveVal == true){
            removeProd.push(i);
        }
       })
       
       let newList = [];
       let j =0;
       for(let i=0;i<productList.length;i++){
            if(i == removeProd[j]){
                j++;
            }
            else{
                newList.push(productList[i]);
            }
       }
      
       this.props.setproducts(newList);
   }

  render(){
    const filters = this.state.priceFilter.condition.map((fil,i)=>{
        return(
            <div className="holderFilter" key={i}>
                <div className="check">
                    <Checkbox checked={fil.status} onChange={()=>this.toggleStatusFilter(i)}/>
                </div>
                <div className="prices"><p>{fil.minPrice}{fil.maxPrice==Infinity?'+':'-'+fil.maxPrice}</p></div>
            </div>
        )
    })
    // console.log(this.state)
    return (
      <div className="filterMain">
          <br/>
          <div className="filterByPrice">
                <h5>Filter By price</h5>
                <div className="filters">
                   
                    {filters}
                </div>
                <Button className="addProds" onClick={this.applyFilter}>Apply</Button>
          </div>
      </div>
    );
  }
  
}

export default FilterPanel;
