import React from "react"

export default function Pagination(props) {
    function createButtons(page, firstPage, lastPage) {
        let pageNumbers = []
        page = parseInt(page)
        firstPage = parseInt(firstPage)
        lastPage = parseInt(lastPage)

        if (page >= firstPage && page <= firstPage + 3) {
            pageNumbers = [
                firstPage + 1,
                firstPage + 2,
                firstPage + 3,
                firstPage + 4,
                firstPage + 5,
                "...",
            ]
        } else if (page <= lastPage && page >= lastPage - 3) {
            pageNumbers = [
                "...",
                lastPage - 5,
                lastPage - 4,
                lastPage - 3,
                lastPage - 2,
                lastPage - 1,
            ]
        } else {
            pageNumbers = [
                "...",
                page - 2,
                page - 1,
                page,
                page + 1,
                page + 2,
                "...",
            ]
        }
        return pageNumbers.map((pageNumber) =>
            pageNumber === "..." ? (
                <button>{pageNumber}</button>
            ) : (
                <button
                    name="page"
                    value={pageNumber}
                    onClick={(e) => props.handleButtonChange(e)}
                >
                    {pageNumber}
                </button>
            )
        )
    }
    const buttons = createButtons(props.page, props.firstPage, props.lastPage)
    return (
        <div>
            <button
                name="page"
                value={props.firstPage}
                onClick={(e) => props.handleButtonChange(e)}
            >
                {props.firstPage}
            </button>
            {buttons}
            <button
                name="page"
                value={props.lastPage}
                onClick={(e) => props.handleButtonChange(e)}
            >
                {props.lastPage}
            </button>
        </div>
    )
}
