import React from "react";
import { useForm } from "react-hook-form";
import '../InputPayment/InputPayment.scss'

interface InputTermProps {
    setTerm: (value:number) => void
    value:number
    loading:boolean
    setTermValid: (value:boolean) =>void
}

interface FormData {
    term: number
};

const InputTerm:React.FC<InputTermProps> = ({setTerm,value,loading, setTermValid}) => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>();


    React.useEffect(()=>{
        if(!errors.term?.message){
            setTermValid(false)
        } else if(errors.term?.message){
            setTermValid(true)
        }
    },[errors.term?.message])


    return (
        <div style={{marginRight:'10px'}}>
            <span className="inputSlider-title">Срок лизинга</span>
            <div className="inputSlider-content">
                <label>{errors.term || !value ? (
                    <p style={{color:'red'}}>{errors.term?.message}</p>
                ): ''}</label>
                <div className={loading ? 'disabled label-vulue' : 'label-vulue' }>
                    <form onChange={handleSubmit((data)=>setTerm(data.term))}>
                        <input  type='number' value={value} disabled={loading}  
                        {...register("term", 
                        {min: {value:10, message:'Возможный минимальный срок - 10 мес.'}, 
                        max: {value:60, message:'Возможный максимальный срок - 60 мес.'}, 
                        onChange:(e)=>{setTerm(+e.target.value)}})}/>
                    </form>
                    <h2 >мес.</h2>
                </div>
                 <div>
                    <input disabled={loading} defaultValue={10} type="range" id="price" name="price" min={10} max={60} onChange={(e)=>setTerm(+e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default InputTerm