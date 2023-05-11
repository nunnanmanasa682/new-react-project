import React,{useState,useEffect} from 'react';

const Form = ({track,settrack})=>{
  const [TotalAMT,setTotalAMT] = useState(0);
  const [InputValue,setInputValue] = useState(0);
  //const [transactions,settransactions] = useState([]);
  const tatal = parseInt(TotalAMT);
  const Value = parseInt(InputValue);
  const date = new Date().toLocaleString();

  const updateHandler = (e)=>{
    setInputValue(e.target.value)
  }
  const Addhandler = ()=>{
    setTotalAMT(tatal+Value);
    setInputValue('');
    //settransactions([...transactions,`Date: ${date}, Current Total: ${date} :, Add + ${Value} :, Total = ${tatal+Value}`]);
    // settransactions([...transactions,
    // {tDate:date,
    // tTotal:tatal,
    // tAddedAmount:Value,
    // tRemovedAmount:null,
    // tBalanceAmount:tatal+Value}
    // ]);
    settrack([...track,
      {tDate:date,
      tTotal:tatal,
      tAddedAmount:Value,
      tRemovedAmount:'-',
      tBalanceAmount:tatal+Value}
      ]);
  }

  const Removehandler = ()=>{
    setTotalAMT(tatal-Value);
    setInputValue('');
    //settransactions([...transactions,`Date: ${date}, Current Total: ${tatal} :, Add + ${Value} :, Total = ${tatal-Value}`]);
    // settransactions([...transactions,
    //   {tDate:date,
    //   tTotal:tatal,
    //   tAddedAmount:Value,
    //   tRemovedAmount:null,
    //   tBalanceAmount:tatal-Value}
    //   ]);
    settrack([...track,
      {tDate:date,
      tTotal:tatal,
      tAddedAmount:'-',
      tRemovedAmount:Value,
      tBalanceAmount:tatal-Value}
      ]);

  }
  useEffect(()=>{
    //console.log(`Total Amount: ${tatal}`);
    //console.log(transactions.tDate);
  },[])
return <div className='container my-4'>
        <div className='row'>
          <div className='col col-md-6 m-md-auto'>
            <div className='gutter-gap'>
              <h1 className='text-center border p-2'>Expense Tracker - Basic</h1>
              <form className='border p-2 mt-5'>
                <h3 className='text-center'>Balance: {TotalAMT}</h3>
                <div className='mb-3'>
                  <input type='number' placeholder='Enter Amount' className='form-control rounded-0 w-50 m-auto'
                  value={InputValue}
                  onChange={updateHandler}/>
                  <input type='text' name="reason" className='form-control'/>
                </div>
                <div className='mb-3 text-center'>
                  <button type='button' className='btn bg-light border rounded-0 me-2'
                  onClick={Addhandler}>ADD</button>
                  <button type='button' className='btn bg-light border rounded-0'
                   onClick={Removehandler}>REMOVE</button>
                </div>
              </form>
            </div>
              {/* {
                transactions.length>0?<>
                {
                  transactions.map((elem,index)=>{
                    return <p key={index}>{elem.tDate}</p>
                  })
                }
                </>:null
              } */}
          </div>
        </div>
       </div>;
}

export default Form;