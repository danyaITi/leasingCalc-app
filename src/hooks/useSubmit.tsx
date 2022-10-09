import axios from 'axios'

interface R {
    car_coast:number,
    initail_payment: number,
    initail_payment_percent: number,
    lease_term: number,
    total_sum: number,
    monthly_payment_from: number
}

const useSubmit = () => {
    const submitForm = async (req:R) =>{
        const {data} = await axios.post<R>('https://hookb.in/eK160jgYJ6UlaRPldJ1P/',req,{headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        }})
        console.log(data)
    }

    return {
        submitForm
    }

}

export default useSubmit