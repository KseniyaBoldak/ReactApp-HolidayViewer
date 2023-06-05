import { useCallback } from 'react'
import './sight.style.css'
import { SearchImage } from '../../components/Image'
import Card, {
    CardActions,
    CardContent,
    CardHeader,
} from '../../components/Card'

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
            <CardHeader>{value}</CardHeader>
            <CardContent onClick={onClick} />
            <CardActions>
                <SearchImage onClick={onClick} />
            </CardActions>
        </Card>
    )
}
