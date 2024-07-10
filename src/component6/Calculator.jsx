
import { useState } from "react"

function Calculator (){
const [InputValue, setInputValue] = useState('')

const Calculation = (a,b)=>{
if(a+b){
return a+b
}
if(a*b){
    return a*b
}
if(a/b){
    return a/b
}
if(a-b){
    return a-b
}
}
  

function display(value){
    setInputValue(InputValue + value)
}

function calculate(){
    
    let answers = Calculation(InputValue)
    setInputValue(answers)

}
function Clear (){
    setInputValue('')
}
    return(
        <main>
              <h1 className="calc-title">Calculator App</h1>
        <form className="calculator" name="calc">
          
            <input value={InputValue} className="value"/>
            <div className="calc-grid">
            <span className="num clear" onClick={()=>Clear()}>c</span>
    <span onClick={()=>display("/")}>/</span>
    <span onClick={()=>display("*")}>*</span>
    <span onClick={()=>display("7")}>7</span>
    <span onClick={()=>display("8")}>8</span>
    <span onClick={()=>display("9")}>9</span>
    <span onClick={()=>display("-")}>-</span>
    <span onClick={()=>display("4")}>4</span>
    <span onClick={()=>display("5")}>5</span>
    <span onClick={()=>display("6")}>6</span>
    <span className="plus" onClick={()=>display("+")}>+</span>
    <span onClick={()=>display("1")}>1</span>
    <span onClick={()=>display("2")}>2</span>
    <span onClick={()=>display("3")}>3</span>
    <span onClick={()=>display("0")}>0</span>
    <span onClick={()=>display("00")}>00</span>
    <span onClick={()=>display(".")}>.</span>
    <span className="equal" onClick={()=>calculate()}>=</span>
</div>
        </form>
        </main>
    )
}
export default Calculator