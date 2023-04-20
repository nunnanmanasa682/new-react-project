import React from 'react'
class Product extends React.Component{

    state={
        Product_Name:"RealmeC21Y(Black Gross,32GB)",
        Image:'https://rukminim1.flixcart.com/image/224/224/l1qrjbk0/mobile/d/w/h/-original-imagd8pyfk7wbdkg.jpeg?q=90',
        qty:1,
        Price:9499
    }
    

    incrHandler=()=>{
        this.setState({qty:this.state.qty + 1})
    }
    decrHandler=()=>{
        this.setState({qty:this.state.qty - 1})
    }
    render(){
        return <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <table className='table-table-hover' border ="1">
                        <thead>
                            <tr>
                                <th>Product_Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>qty</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>{this.state.Product_Name}</td>
                                <td><img src={this.state.Image} alt=" "  /></td>

                                <td>{this.state.Price}</td>
                                <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.qty}<i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                                <td>{this.state.Price * this.state.qty}</td>

</tr>

                            </tbody>
                        
                    </table>
                </div>
            </div>
        </div>

    
    }
}
export default Product