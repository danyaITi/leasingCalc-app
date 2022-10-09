import {useState} from 'react'

const useCalc = () => {
    const [sumContract, setSumContract] = useState(0)
    const [monthPay , setMonthPay ] = useState(0)
    const [payment,setPayment] = useState(100000)


    const handleMonthPay = (priceCar:number, term:number) => {
        setMonthPay(Math.ceil((priceCar - payment) * ((0.035 * Math.pow((1 + 0.035), term)) / (Math.pow((1 + 0.035), term) - 1))))
    }


    const handleSumContract = (term:number) =>{
        setSumContract(Math.ceil(payment+(term*monthPay)))
    }


    const handlePayment = (percent:number,priceCar:number) =>{
        setPayment(Math.ceil((percent*priceCar)/100))
    }


    return {
        handleMonthPay,
        handleSumContract,
        handlePayment,
        payment,
        monthPay,
        sumContract
    } 
 
}

export default useCalc