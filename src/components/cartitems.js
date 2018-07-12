import React, {
  Component
} from 'react';

class CartItems extends Component {
  render() {
    return (
      <div className = "container" >
      <h1 > Cart Items < /h1>
      <div className = "list-group" >
      <div className = "list-group-item" >
      <div className = "row" >
      <div className = "col-md-8" > Product </div>
      <div className = "col-md-2" > Price </div>
      <div className = "col-md-2" > Quantity </div>
      </div>
      </div>

      <div class = "list-group-item" >
      <div class = "row" >
      <div class = "col-md-8" > Mediocre Iron Watch </div>
      <div class = "col-md-2" > 399 </div>
      <div class = "col-md-2" > 1 </div>
      </div>
      </div>

      <div class = "list-group-item" >
      <div class = "row" >
      <div class = "col-md-8" > Heavy Duty Concrete Plate </div>
      <div class = "col-md-2" > 499 </div>
      <div class = "col-md-2" > 2 </div>
      </div>
      </div>

      <div class = "list-group-item" >
      <div class = "row" >
      <div class = "col-md-8" > Intelligent Paper Knife </div>
      <div class = "col-md-2" > 1999 </div>
      <div class = "col-md-2" > 1 </div>
      </div>
      </div>

      </div>
      </div>



    );
  }
}

export default CartItems;
