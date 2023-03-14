import './pagination.style.css'

export type PaginationProps = {
    nextPage?: () => void
    prevPage?: () => void
    setPage?: (num: number) => void
    page?: number
    totalPages?: number
}
const Pagination = (props: PaginationProps) => {
    const PaginationButtons = (): JSX.Element => {
        let buttons: JSX.Element[] = []
        for (let i = 0; i < props.totalPages; i++) {
            buttons.push(
                <button
                    onClick={() => props.setPage(i + 1)}
                    key={i}
                    className="pagination__arrow"
                >
                    {i + 1}
                </button>
            )
        }
        return <>{buttons}</>
    }

    return (
        <div className="pagination">
            <p className="pagination__page-count">
                {props.page}/{props.totalPages}
            </p>
            <button onClick={props.prevPage} className="pagination__arrow">
                &larr;
            </button>
            <PaginationButtons />
            <button onClick={props.nextPage} className="pagination__arrow">
                &rarr;
            </button>
        </div>
    )
}
Pagination.displayName = 'Pagination'
export default Pagination
