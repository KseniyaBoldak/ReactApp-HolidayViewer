import usePagination, { PaginationOptions } from './usePagination'
import './pagination.style.css'

export type PaginationProps = PaginationOptions

export default function Pagination(props: PaginationProps) {
    const { nextPage, prevPage, page, setPage, totalPages } =
        usePagination(props)

    if (!setPage || !totalPages) return null

    const Buttons = (): JSX.Element => {
        let buttons: JSX.Element[] = []
        for (let i = 0; i < totalPages; i++) {
            buttons.push(
                <button
                    onClick={() => setPage(i + 1)}
                    key={i}
                    className="pagination__arrow"
                >
                    {i + 1}
                </button>
            )
        }
        return <div>{buttons}</div>
    }

    return (
        <div className="pagination">
            <p className="pagination__page-count">
                {page}/{totalPages}
            </p>
            <button onClick={prevPage} className="pagination__arrow">
                &larr;
            </button>
            <Buttons />
            <button onClick={nextPage} className="pagination__arrow">
                &rarr;
            </button>
        </div>
    )
}
