import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increamentByAmount, increment, reset } from './counterSlice'

const Counter = () => {

    const count = useSelector((state)=>state.counter.counter)
    const dispatch=useDispatch()
    console.log(count)

    const[incrementAmount,setIncrementAmount] = useState(0)
    const addValue = Number(incrementAmount)||0

    console.log(addValue)
    const resetAll=()=>{
      setIncrementAmount(0);
      dispatch(reset())
    }

    console.log("page is rendered")
    return (
    <section>
        <p>{count}</p>
        <div>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
        <button onClick={()=>dispatch(increamentByAmount(3))}>increment by 3</button>
        <input 
        type="text"
        value={incrementAmount}
        onChange={(e)=>setIncrementAmount(e.target.value)} 
        />
        </div>
        <div>
          <button onClick={()=>dispatch(increamentByAmount(addValue))}>increamentByAmount</button>
          <button onClick={resetAll}>Reset</button>
        </div>
    </section>
  )
}

export default Counter