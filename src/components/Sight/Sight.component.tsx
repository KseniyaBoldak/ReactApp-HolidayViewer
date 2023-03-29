import { useCallback } from 'react'
import './sight.style.css'

export type SightProps = {
    id?: string
    value?: string
    getInfo?: (id: string) => void
}

export default function Sight(props: SightProps) {
    const { id, value, getInfo, ...otherProps } = props

    const onClick = useCallback(() => {
        if (!id || !getInfo) return null
        getInfo(id)
    }, [getInfo, id])

    return (
        <div key={id} className="sight" {...otherProps}>
            <div className="search-wrap">
                <div onClick={onClick} className="search" />
            </div>
            {value}
        </div>
    )
}
