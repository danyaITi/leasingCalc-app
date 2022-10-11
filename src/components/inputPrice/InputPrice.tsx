import React from "react";
import { useForm } from "react-hook-form";
import { formate } from "../../utils/formateNumbers";
import '../InputPayment/InputPayment.scss'

interface InputPriceProps{
    setPriceCar: (value:number) => void
    value:number
    loading:boolean
    setPriceValid: (value:boolean) =>void
}

interface FormData {
    price: number
};

const InputPrice:React.FC<InputPriceProps> = ({setPriceCar,value, loading,setPriceValid}) => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>();

    React.useEffect(()=>{
        if(!errors.price?.message){
            setPriceValid(false)
        } else if(errors.price?.message){
            setPriceValid(true)
        }
    },[errors.price?.message])


    return (
        <div style={{marginRight:'10px'}}>
            <span className="inputSlider-title">Стоимость автомобиля в лизинг</span>
            <div className="inputSlider-content">
                <label>{errors.price || !value ? (
                    <p style={{color:'red'}}>Возможная сумма лизинга 1-6 млн</p>
                ): ''}</label>
                <div className={loading ? 'disabled label-vulue' : 'label-vulue' }>
                    <form onChange={handleSubmit((data) => setPriceCar(data.price))}>
                        <input type='number' value={value} disabled={loading}   
                        {...register("price", 
                        {min: {value:1000000, message:'Возможная минимальная сумма лизинга - 1 млн.'}, 
                        max:{value:6000000, message:'Возможная максимальная сумма лизинга - 6 млн.'}, 
                        onChange:(e)=>{setPriceCar(+e.target.value)}})}/>
                    </form>
                    <h2>руб.</h2>
                </div>
                <div>
                    <input disabled={loading} defaultValue={1000000} type="range" id="price" name="price" min={1000000} max={6000000} onChange={(e)=>setPriceCar(+e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default InputPrice