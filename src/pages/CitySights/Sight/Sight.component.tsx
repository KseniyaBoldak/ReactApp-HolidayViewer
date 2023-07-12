import Card from '../../../components/Card'
import { ImageWithMap } from '../../../components/Image'
import { useCallback } from 'react'
import './Sight.style.css'

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
        <Card id={id} {...otherProps}>
            <Card.Header>{value}</Card.Header>
            <Card.Content onClick={onClick} />
            <Card.Actions>
                <ImageWithMap onClick={onClick} type="search" />
            </Card.Actions>
        </Card>
    )
}
