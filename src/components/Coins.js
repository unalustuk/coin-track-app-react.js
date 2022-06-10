import React from "react"

export default function Coins(props) {
    let items = []

    if (props.isFetch) {
        items = props.coins.map((coin) => {
            return (
                <li key={coin.id}>
                    {coin.name} <img src={coin.image} alt="" />{" "}
                    {coin.current_price}=>
                    {coin.market_cap_rank}
                </li>
            )
        })
    } else {
        items = "not fetched"
    }
    return <div>{items}</div>
}
