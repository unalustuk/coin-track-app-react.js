import React from "react"

export default function Coins(props) {
    let items = []

    if (props.isFetch) {
        items = props.coins.map((coin) => {
            console.log(typeof coin.current_price)

            let coinPrice
            if (coin.current_price && coin.current_price > 1) {
                coinPrice = coin.current_price.toLocaleString("en-US")
            } else if (coin.current_price && coin.current_price < 1) {
                coinPrice = coin.current_price
            } else {
                coinPrice = "Unknown"
            }
            return (
                <tr key={coin.id}>
                    <td>{coin.market_cap_rank}</td>
                    <td>
                        <img src={coin.image} alt="" /> {coin.name}{" "}
                        {coin.symbol.toUpperCase()}
                    </td>
                    <td>
                        {/* {coin.current_price ? coin.current_price : "Unknown"} */}
                        {coinPrice}
                    </td>
                    <td>
                        {coin.price_change_percentage_24h
                            ? coin.price_change_percentage_24h.toFixed(2) + "%"
                            : "Unknown"}
                    </td>
                    <td>
                        {coin.market_cap
                            ? coin.market_cap.toLocaleString("en-US")
                            : "Unknown"}
                    </td>
                    <td>
                        {coin.max_supply
                            ? coin.max_supply.toLocaleString(undefined, {
                                  minimumFractionDigits: 0,
                              }) +
                              " " +
                              coin.symbol.toUpperCase()
                            : " Unknown"}
                    </td>
                    <td>
                        {coin.circulating_supply
                            ? coin.circulating_supply.toLocaleString("en-US") +
                              " " +
                              coin.symbol.toUpperCase()
                            : "Unknown"}
                    </td>
                </tr>
            )
        })
    } else {
        items = (
            <tr>
                <td>not fetched</td>
            </tr>
        )
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>24h %</th>
                        <th>Market Cap</th>
                        <th>Max Supply</th>
                        <th>Circulating Supply</th>
                    </tr>
                </thead>
                <tbody>{items}</tbody>
            </table>
        </div>
    )
}
