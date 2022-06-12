import { useState, useEffect } from "react"
import axios from "axios"
import Coins from "./components/Coins"
function App() {
    const [coins, setCoins] = useState()
    const [isFetch, setIsFetch] = useState(false)
    const [options, setOptions] = useState({
        page: 1,
    })
    const firstPage = 1
    const lastPage = 135

    useEffect(() => {
        axios
            .get(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${options.page}&sparkline=false`
            )
            .then((res) => {
                setCoins(res.data)
                setIsFetch(true)
                window.scrollTo(0, 0)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [options.page])

    function handleButtonChange(event) {
        console.log("click")
        const { name, value } = event.target
        setOptions((prevOptData) => {
            return {
                ...prevOptData,
                [name]: value,
            }
        })
    }
    console.log(options.page)
    return (
        <div className="App">
            <Coins
                isFetch={isFetch}
                coins={coins}
                handleButtonChange={handleButtonChange}
                page={options.page}
                firstPage={firstPage}
                lastPage={lastPage}
            />
        </div>
    )
}

export default App
