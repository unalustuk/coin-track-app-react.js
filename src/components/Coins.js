import React from "react"
import Pagination from "./Pagination"

export default function Coins(props) {
    let items = []

    if (props.isFetch) {
        items = props.coins.map((coin) => {
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
                        {coinPrice !== "Unknown" ? "$" + coinPrice : coinPrice}
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
                        <th onClick={() => props.sortCoins("market_cap_rank")}>
                            #
                        </th>
                        <th onClick={() => props.sortCoins("name")}>Name</th>
                        <th onClick={() => props.sortCoins("current_price")}>
                            Price
                        </th>
                        <th
                            onClick={() =>
                                props.sortCoins("price_change_percentage_24h")
                            }
                        >
                            24h %
                        </th>
                        <th onClick={() => props.sortCoins("market_cap")}>
                            Market Cap
                        </th>
                        <th onClick={() => props.sortCoins("max_supply")}>
                            Max Supply
                        </th>
                        <th
                            onClick={() =>
                                props.sortCoins("circulating_supply")
                            }
                        >
                            Circulating Supply
                        </th>
                    </tr>
                </thead>
                <tbody>{items}</tbody>
            </table>
            <Pagination
                handleButtonChange={props.handleButtonChange}
                page={props.page}
                firstPage={props.firstPage}
                lastPage={props.lastPage}
            />
        </div>
    )
}
