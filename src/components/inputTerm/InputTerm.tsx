import React from "react";
import '../inputPayment/InputPayment.scss'

interface InputTermProps{
    fn: (value:number) => void
    value:number
    loading:boolean

}

const InputTerm:React.FC<InputTermProps> = ({fn,value,loading}) => {

    return (
        <div style={{marginRight:'10px'}}>
            <span className="inputSlider-title">Срок лизинга</span>
            <div className="inputSlider-content">
                <div className="label-vulue">
                    <input  disabled={loading} type="number" value={value} onChange={(e)=>fn(+e.target.value)} />
                    <h2>мес.</h2>
                </div>
                <div>
                    <input disabled={loading} defaultValue={10} type="range" id="price" name="price" min={10} max={60} onChange={(e)=>fn(+e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default InputTerm