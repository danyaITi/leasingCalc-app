import { useEffect, useState } from "react";
import InputPrice from "./components/inputPrice/InputPrice";
import InputPayment from "./components/inputPayment/InputPayment";
import InputTerm from "./components/inputTerm/InputTerm";
import useCalc from "./hooks/useCalc";
import useSubmit from "./hooks/useSubmit";
import { message } from 'antd';
import 'antd/dist/antd.css';


function App() {
    const[priceCar, setPriceCar]= useState(1000000)
    const[percent, setPercent]= useState(10)
    const[term, setTerm]= useState(10)

    const [loading, setLoading] = useState(false)

    const {handlePayment, handleMonthPay, handleSumContract, payment, monthPay, sumContract} = useCalc()
    const {submitForm} = useSubmit()

    const error = (err:string) => {
        message.error(`${err}`);
    };

    const handleSubmit = async () => {
        const req = {
            car_coast: priceCar,
            initail_payment: payment,
            initail_payment_percent: percent,
            lease_term: term,
            total_sum: sumContract,
            monthly_payment_from: monthPay
        }

        setLoading(true)

        try {
            await submitForm(req)
        } catch (err:any) {
            error(err.message)
            setLoading(false)
        }
    }

    useEffect(()=>{
        handlePayment(percent, priceCar)
        handleMonthPay(priceCar, term)
        handleSumContract(term)
    },[priceCar,percent,term,monthPay,payment])

    

  return (
    <div className="App">
        <div className="calc">
            <div className="content">
                <div className="title">
                    <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
                </div>
                <div className="form">
                    <InputPrice loading={loading} fn={setPriceCar} value={priceCar}/>
                    <InputPayment loading={loading} fn={setPercent} value={payment} percent={percent} />
                    <InputTerm loading={loading} fn={setTerm} value={term}/>
                </div>
                <div className="result">
                    <div className="result-box">
                        <span>Сумма договора лизинга</span>
                        <h1>{!sumContract ? 0 : sumContract}</h1>
                    </div>
                    <div className="result-box">
                        <span>Ежемесячный платеж от</span>
                        <h1>{!monthPay ? 0 : monthPay}</h1>
                    </div>
                    <div className="result-btn">
                        <button disabled={loading} onClick={handleSubmit}>{loading ? (<div className="lds-ring"><div></div><div></div><div></div><div></div></div>) : 'Оставить заявку'}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
