import './search.style.css'

export type SearchProps = {
    value?: string
    onSearchClick?: (value: string) => Promise<void>
}

const Search = (props: SearchProps) => {
    return (
        <div className="search">
            <div
                key={props.value}
                onClick={() => props.onSearchClick(props.value)}
                className="search__img"
            ></div>
        </div>
    )
}
Search.displayName = 'Search'
export default Search
