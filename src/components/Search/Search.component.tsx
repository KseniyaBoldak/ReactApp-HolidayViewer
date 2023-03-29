import './search.style.css'

export type SearchProps = {
    value?: string
    onClick?: (value: string) => void
}

export default function SearchIcon(props: SearchProps) {
    const { value, onClick } = props

    return (
        <div className="search">
            <div
                onClick={() => onClick?.(value ?? '')}
                className="search__img"
            ></div>
        </div>
    )
}
