import { useState, useEffect } from "react"
import axios from "axios"
import Coins from "./components/Coins"
function App() {
    const [coins, setCoins] = useState()
    const [isFetch, setIsFetch] = useState(false)
    const [options, setOptions] = useState({
        page: "13",
    })

    useEffect(() => {
        axios
            .get(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${options.page}&sparkline=false`
            )
            .then((res) => {
                setCoins(res.data)
                setIsFetch(true)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div className="App">
            <Coins isFetch={isFetch} coins={coins} />
        </div>
    )
}

export default App
