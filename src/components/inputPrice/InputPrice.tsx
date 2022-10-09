import React from "react";
import '../inputPayment/InputPayment.scss'

interface InputPriceProps{
    fn: (value:number) => void
    value:number
    loading:boolean

}

const InputPrice:React.FC<InputPriceProps> = ({fn,value, loading}) => {

    return (
        <div style={{marginRight:'10px'}}>
            <span className="inputSlider-title">Стоимость автомобиля в лизинг</span>
            <div className="inputSlider-content">
                <div className="label-vulue">
                    <input disabled={loading} type="number" value={value} onChange={(e)=>fn(+e.target.value)}/>
                    <h2>руб.</h2>
                </div>
                <div>
                    <input disabled={loading} defaultValue={1000000} type="range" id="price" name="price" min={1000000} max={6000000} onChange={(e)=>fn(+e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default InputPrice