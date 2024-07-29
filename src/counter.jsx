import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { increment } from "./counterSlice";

function counter(){

    const count = useSelector((state)=>state.counter.value)
    const Dispatch = useDispatch()

    return(
        <>
            <h1>{count}</h1>
            <button type="button" onClick={()=>Dispatch(increment())}>Increment</button>
        </>
    );
}

export default counter;