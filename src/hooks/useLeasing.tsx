import axios from 'axios'

interface ReqProps {
    car_coast:number,
    initail_payment: number,
    initail_payment_percent: number,
    lease_term: number,
    total_sum: number,
    monthly_payment_from: number
}

const useLeasing = () => {
    const submitForm = async (req:ReqProps) =>{
        const {data} = await axios.post<ReqProps>('https://hookb.in/eK160jgYJ6UlaRPldJ1P',req,{headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        }})

        return data
    }
    return {
        submitForm
    }

}

export default useLeasing