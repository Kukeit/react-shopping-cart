
//feature 1
import { Component } from 'react';
import './index.css';
import data from './data.json'
import Products from './components/Products';
import Filter from './components/Filter';


class App extends Component {

  constructor(){
    super();
    this.state={
      products:data.products,
      size:"",
      sort:""
    }
  }

  sortProducts=(event)=>{
    //imp
    console.log(event.target.value);

    const sort=event.target.value;

    this.setState((state)=>(
      {
        sort:sort,
        products:this.state.products.slice().sort((a,b)=>(
          sort==='lowest'? a.price < b.price ? -1 :1
          : sort ==="highest" ? a.price > b.price ? -1 : 1
          : a._id > b._id ? -1: 1
      ))}
    ))
  }

  filterProducts=(event)=>{
    //imp
   

    if(event.target.value==="" || event.target.value==="ALL"){
      //All size
      console.log(event.target.value)
      this.setState({
        size:(event.target.value==="ALL")?"":event.target.value,
        products:data.products
      })
    }else{
      //specification size
      this.setState({
        size:event.target.value,
        products:data.products.filter(product=>product.availableSizes.indexOf(event.target.value)>=0)
      })
    }
    
  }

  render(){
    return (
      <div className="grid-container">
        <header>
          <a href="">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter 
                count={this.state.products.length} 
                size={this.state.size} 
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              />
              <Products products={this.state.products}/>
            </div>
            <div className="sizebar">
              Cart Items
            </div>
          </div>
        </main>
        <footer>All right is reserved.</footer>
              
      </div>
    );
  }
  
}

export default App;
