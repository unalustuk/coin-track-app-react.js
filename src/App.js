import { useState, useEffect } from "react"
import axios from "axios"
import Coins from "./components/Coins"
function App() {
    const [coins, setCoins] = useState()
    const [isFetch, setIsFetch] = useState(false)
    const [options, setOptions] = useState({
        page: 1,
    })
    const [order, setOrder] = useState({
        orderby: "DSC",
        column: "market_cap_rank",
    })
    const firstPage = 1
    const lastPage = 39

    // api call
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
    //  sorting table
    function sortCoins(column) {
        if (order.column !== column && order.orderby !== "DSC") {
            const sortedCoins = [...coins].sort((a, b) => {
                if (column === "name") {
                    return a[column].toLowerCase() < b[column].toLowerCase()
                        ? 1
                        : -1
                } else {
                    return a[column] < b[column] ? 1 : -1
                }
            })
            setCoins(sortedCoins)
            setOrder((prevState) => {
                return {
                    ...prevState,
                    orderby: "ASC",
                    column: column,
                }
            })
        } else {
            if (order.orderby === "ASC") {
                const sortedCoins = [...coins].sort((a, b) => {
                    if (column === "name") {
                        return a[column].toLowerCase() > b[column].toLowerCase()
                            ? 1
                            : -1
                    } else {
                        return a[column] > b[column] ? 1 : -1
                    }
                })
                setCoins(sortedCoins)
                setOrder((prevState) => {
                    return {
                        ...prevState,
                        orderby: "DSC",
                        column: column,
                    }
                })
            }

            if (order.orderby === "DSC") {
                const sortedCoins = [...coins].sort((a, b) => {
                    if (column === "name") {
                        return a[column].toLowerCase() < b[column].toLowerCase()
                            ? 1
                            : -1
                    } else {
                        return a[column] < b[column] ? 1 : -1
                    }
                })
                setCoins(sortedCoins)
                setOrder((prevState) => {
                    return {
                        ...prevState,
                        orderby: "ASC",
                        column: column,
                    }
                })
            }
        }
    }

    return (
        <div className="App">
            <Coins
                isFetch={isFetch}
                coins={coins}
                handleButtonChange={handleButtonChange}
                page={options.page}
                firstPage={firstPage}
                lastPage={lastPage}
                sortCoins={sortCoins}
            />
        </div>
    )
}

export default App
