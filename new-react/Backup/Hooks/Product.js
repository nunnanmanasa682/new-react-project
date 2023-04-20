import   React,{useState} from 'react'

const Product =() => {
    let [Flag, setFlag]= useState(true)
    let [Msg, setMsg]= useState("hello")
    let [Product, setProduct] = useState({Name:"Canon EOS 3000D DSLR Camera 1 Camera Body",Price:30999, qty:2, Image:"https://rukminim1.flixcart.com/image/416/416/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70"})
let decrHandler = () => {
    setProduct({ ...Product, qty: Product.qty - 1})
}
return <div className='container mt-5'>
    <div className='row'>
        <div className="col-md-6">
            <table className='table'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>qty</th>
                        <th>total</th>
                    </tr>
                </thead>
                <tbody>
                 <tr>
                    <td>{Product.Name}</td>
                    <td><img src={Product.Image} height="50px" /></td>
                    <td>{Product.Price}</td>
                    <td><i className='fa fa-minus-circle' onClick={decrHandler}></i> {Product.qty}<i className='fa fa-plus-circle' onClick={()=>{
                         setProduct({ ...Product, qty: Product.qty + 1 })
                    }}></i></td>
                    <td>{Product.qty * Product.Price}</td>
                    </tr>   
                </tbody>
            </table>
        </div>
    </div>
</div>



}
export default Product
