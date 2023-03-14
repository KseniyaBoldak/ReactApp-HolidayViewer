import './sight.style.css'

export type SightProps = {
    id?: string
    name?: string
    getInfo?: (id: string) => Promise<void>
}

const Sight = (props: SightProps) => {
    return (
        <div key={props.id} className="sight">
            <div className="search-wrap">
                <div
                    onClick={() => {
                        props.getInfo(props.id)
                    }}
                    className="search"
                />
            </div>
            {props.name}
        </div>
    )
}
Sight.displayName = 'Sight'
export default Sight
