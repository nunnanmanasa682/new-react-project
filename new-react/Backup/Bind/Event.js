import React from 'react'
class Event extends React.Component{
 state={
    Event:{
        Name:"RealmeC21Y(Black Gross,32GB)",
        Image:'https://rukminim1.flixcart.com/image/224/224/l1qrjbk0/mobile/d/w/h/-original-imagd8pyfk7wbdkg.jpeg?q=90',
        Price:9499,
        qty:1


    }
    
 }
 incrHandler=()=>{
this.setState({ Event: { ...this.state.Event, qty: this.state.Event.qty + 1}})
 }
 decrHandler=()=>{
    this.setState({ Event: { ...this.state.Event, qty: this.state.Event.qty - 1 } })

 }
 render(){

    return <div className='container'>
        <div className='row'>
            <div className='col-md-8'>
                <table className='table table-hover' border={1}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            
                            <th>Price</th>
                            <th>qty</th>
                            <th>Total</th>

                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                                    <td>{this.state.Event.Name}</td>
                                    <td><img src={this.state.Event.Image} alt="" height="60px" /> </td>
                                    <td>{this.state.Event.Price}</td>
                                    <td><i className="fa fa-minus-circle" onClick={this.decrHandler} ></i> {this.state.product.qty} <i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>

                                    <td>{this.state.Event.Price * this.state.Event.qty}</td>
                                </tr>
                            
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
    
 }



}
export default Event