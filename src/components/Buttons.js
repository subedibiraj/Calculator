import React from 'react'
import { useState } from 'react';
import '../components/Buttons.css'

export default function Buttons() {
    const[answer,setAnswer] = useState("");


    const calculate = (num) => {
        setAnswer(answer.concat(num.target.name));
    }

    const perform = () => {
        setAnswer(eval(answer).toString());
    }


    const clear = () => {
        setAnswer("");
    }

    const backspace = () => {
        setAnswer(answer.slice(0,answer.length-1));
    }

  return (
    <div className='container'>
        <h1>Calculator</h1>
            <input type="text" className='text-area' value={answer}/>
        <div className="button-area">
            <button type="button" onClick ={clear}>AC</button>
            <button type ="button" onClick ={backspace}>&larr;</button>
            <button type="button" name="=" onClick ={perform}>=</button>
            <button type="button" name ='0' onClick ={calculate}>0</button>
            <button type="button" name ='1' onClick ={calculate}>1</button>
            <button type="button" name='2' onClick ={calculate}>2</button>
            <button type="button" name='3' onClick ={calculate}>3</button>
            <button type="button" name='4' onClick ={calculate}>4</button>
            <button type="button" name='5' onClick ={calculate}>5</button>
            <button type="button" name='6' onClick ={calculate}>6</button>
            <button type="button" name='7' onClick ={calculate}>7</button>
            <button type="button" name='8' onClick ={calculate}>8</button>
            <button type="button" name='9' onClick ={calculate}>9</button>
            <button type="button" name='/' onClick ={calculate}>&divide;</button>
            <button type="button" name="*" onClick ={calculate}>&times;</button>
            <button type="button" name="+" onClick ={calculate}>+</button>
            <button type="button" name="-" onClick ={calculate}>-</button>
            <button type="button" name="." onClick ={calculate}>.</button>
        </div>
    </div>
  )
}
