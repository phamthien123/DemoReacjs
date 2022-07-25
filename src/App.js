import './App.css';
import React from "react";
import { useState } from "react";
/*eslint-disable no-eval */
function App() {
  const [message,setMessage] = useState("");

  const[totals, setTotal] = useState([]);

  
    // console.log(total)
    
    const getValue = (value) =>{
      setMessage(message + (value));
    } 
    const TotalValue = () =>{
      setMessage(eval(message));
      setTotal(prev => [...prev,message + ` = ` + eval(message)]) //[...prev]:bảo lưu mảng cũ
    } 
    const RemoveValue = () =>{
      setMessage(message.slice(0,-1));
    } 
    const clearValue = () =>{
      setMessage("");
    }  

    return (
    <div className='main' >
      <div className='casio'>
        <input type="text" size={48} value={message} disabled/>  
            <div className='flex-container'>
                <div onClick={() => getValue('1')}>1</div>
                <div onClick={() => getValue('2')}>2</div>
                <div onClick={() => getValue('3')}>3</div>  
                <div onClick={() => getValue('+')}>+</div>
            </div>
            <div className='flex-container'>
                <div onClick={() => getValue('4')}>4</div>
                <div onClick={() => getValue('5')}>5</div>
                <div onClick={() => getValue('6')}>6</div>  
                <div onClick={() => getValue('-')}>-</div>
            </div>
            <div className='flex-container'>
                <div onClick={() => getValue('7')}>7</div>
                <div onClick={() => getValue('8')}>8</div>
                <div onClick={() => getValue('9')}>9</div>  
                <div onClick={() => getValue('*')}>*</div>
            </div>
            <div className='flex-container'>
                <div onClick={() => getValue('.')}>.</div>
                <div onClick={() => getValue('0')}>0</div>
                <div onClick={TotalValue}>=</div>  
                <div onClick={() => getValue('/')}>/</div> 
            </div>
            <div className='flex-container'>
                <div onClick={RemoveValue}>C</div>
                <div onClick={clearValue}>Clear</div>
            </div>
        </div>
            <div className='history'>
                <h1>Lịch Sử Phép Tính</h1>
              <ul className='historyMath'>
                    {totals.map((total,index)=>
                        <li key={index}>{total}</li>
                      )}
              </ul>
            </div>
      </div> 
    )
}
export default App;
