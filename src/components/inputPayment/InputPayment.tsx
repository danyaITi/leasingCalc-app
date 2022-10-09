import React from "react";
import './InputPayment.scss'

interface InputPaymentProps{
    fn: (value:number) => void
    percent: number
    value:number
    loading:boolean
}

const InputPayment:React.FC<InputPaymentProps> = ({fn, percent, value, loading}) => {

    return (
        <div style={{marginRight:'10px'}}>
            <span className="inputSlider-title">Первоначальный взнос</span>
            <div className="inputSlider-content">
                <div className="label-vulue">
                    <label htmlFor="price">{value}</label>
                    <h2>{percent}%</h2>
                </div>
                <div>
                    <input disabled={loading} defaultValue={10}  type="range" id="price" name="price" min={10} max={60} onChange={(e)=>fn(+e.target.value)}  />
                </div>
            </div>
        </div>
    )
}

export default InputPayment