import React, {useState} from 'react';
import './Main.css';

const Main = () => {

    const [input, setInput] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        setInput(input.concat(e.target.value))
    }

    const clear = (e) =>{
        setInput('')
    }

    const backspace = (e) => {
        const newInput = input.slice(0, -1)
        setInput(newInput)
    }

    const equals = (e) => {
        e.preventDefault()
        try{
            setInput(eval(input).toString())
        } catch(error){
            setInput('Error. Clear to try again')
        }
        
    }

    return (
        <>
            <div id='main'>
                <div id='screen'>
                    <form>
                        <input type='text' placeholder='0' value={input} />
                    </form>
                </div>
                <div id='container'>
                    <button onClick={backspace} value='back'>Back</button>
                    <button onClick={clear} value='clear'>Clear</button>
                    <button onClick={handleClick} value='7'>7</button>
                    <button onClick={handleClick} value='8'>8</button>
                    <button onClick={handleClick} value='/'>÷</button>
                    <button onClick={handleClick} value='9'>9</button>
                    <button onClick={handleClick} value='4'>4</button>
                    <button onClick={handleClick} value='5'>5</button>
                    <button onClick={handleClick} value='6'>6</button>
                    <button onClick={handleClick} value='*'>x</button>
                    <button onClick={handleClick} value='1'>1</button>
                    <button onClick={handleClick} value='2'>2</button>
                    <button onClick={handleClick} value='3'>3</button>
                    <button onClick={handleClick} value='+'>+</button>
                    <button onClick={handleClick} value='-'>-</button>
                    <button onClick={equals} value='='>=</button>
                    <button onClick={handleClick} value='.'>.</button>
                    <button onClick={handleClick} value='0'>0</button>
                </div>
            </div>
        </>
    )
}

export default Main
