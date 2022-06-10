import { useState, useEffect } from "react"
import axios from "axios"
import Coins from "./components/Coins"
function App() {
    const [coins, setCoins] = useState()
    const [isFetch, setIsFetch] = useState(false)
    useEffect(() => {
        axios
            .get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=try&order=market_cap_desc&per_page=100&page=1&sparkline=false"
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
