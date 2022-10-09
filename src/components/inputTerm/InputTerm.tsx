import React from "react";
import '../InputPayment/InputPayment.scss'

interface InputTermProps{
    setTerm: (value:number) => void
    value:number
    loading:boolean

}

const InputTerm:React.FC<InputTermProps> = ({setTerm,value,loading}) => {

    return (
        <div style={{marginRight:'10px'}}>
            <span className="inputSlider-title">Срок лизинга</span>
            <div className="inputSlider-content">
                <div className="label-vulue">
                    <input  disabled={loading} type="number" value={value} onChange={(e)=>setTerm(+e.target.value)} />
                    <h2>мес.</h2>
                </div>
                <div>
                    <input disabled={loading} defaultValue={10} type="range" id="price" name="price" min={10} max={60} onChange={(e)=>setTerm(+e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default InputTerm