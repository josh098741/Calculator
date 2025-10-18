import React,{ useState } from 'react'

function Home(){

    const [input ,setInput] = useState("")

    const handleChange = (value) => {
        setInput(input + value)
    }

    const handleClear = () => {
        setInput("")
    }

    const handleDelete = () => {
        setInput(input.slice(0,-1))
    }

    const handleCalculate = () => {
        try{
            setInput(eval(input).toString())
        }catch{
            setInput("error")
        }
    }

    return(
        <div className="min-h-screen">
            <div className="border h-[800px] m-5 border-slate-500 rounded">
                <div className="border m-5 h-20 rounded border-black">
                    <div className="text-3xl p-5">{input || "0"}</div>
                </div>
                <div className="border m-5 h-[650px] rounded border-black flex flex-col justify-center items-center">
                    <div>
                        <button onClick={handleClear} className="border w-20 m-5 h-20 rounded text-3xl border-slate-700">C</button>
                        <button className="border w-20 m-5 h-20 rounded text-3xl border-slate-700">%</button>
                        <button onClick={handleDelete} className="border w-20 m-5 h-20 rounded text-3xl border-slate-700">Del</button>
                        <button onClick={() => handleChange("")} className="border w-20 m-5 h-20 rounded text-3xl border-slate-700">/</button>
                    </div>
                    <div>
                        <button onClick={() => handleChange("7")} className="border w-20 m-5 h-20 rounded text-3xl border-slate-700">7</button>
                        <button onClick={() => handleChange("8")} className="border w-20 m-5 h-20 rounded text-3xl border-slate-700">8</button>
                        <button onClick={()=> handleChange("9")} className="border w-20 m-5 h-20 rounded text-3xl border-slate-700">9</button>
                        <button onClick={() => handleChange("*")} className="border w-20 m-5 h-20 rounded text-3xl border-slate-700">X</button>
                    </div>
                    <div>
                        <button onClick={()=> handleChange("4")} className="border w-20 m-5 h-20 rounded text-3xl border-slate-700">4</button>
                        <button onClick={()=> handleChange("5")} className="border w-20 m-5 h-20 rounded text-3xl border-slate-700">5</button>
                        <button onClick={()=> handleChange("6")} className="border w-20 m-5 h-20 rounded text-3xl border-slate-700">6</button>
                        <button onClick={() => handleChange("-")} className="border w-20 m-5 h-20 rounded text-3xl border-slate-700">-</button>
                    </div>
                    <div>
                        <button onClick={()=> handleChange("1")} className="border w-20 m-5 h-20 rounded text-3xl border-slate-700">1</button>
                        <button onClick={()=> handleChange("2")} className="border w-20 m-5 h-20 rounded text-3xl border-slate-700">2</button>
                        <button onClick={()=> handleChange("3")} className="border w-20 m-5 h-20 rounded text-3xl border-slate-700">3</button>
                        <button onClick={() => handleChange("+")} className="border w-20 m-5 h-20 rounded text-3xl border-slate-700">+</button>
                    </div>
                    <div>
                        <button onClick={handleCalculate} className="border w-40 m-5 mr-11 h-20 rounded text-3xl rounded border-slate-700">=</button>
                        <button onClick={() => handleChange("0")} className="border w-20 m-5 h-20 rounded text-3xl border-slate-700">0</button>
                        <button onClick={() => handleChange(".")} className="border w-20 m-5 h-20 rounded text-3xl border-slate-700">.</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home