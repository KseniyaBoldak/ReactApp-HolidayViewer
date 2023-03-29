import ICON_MAP from '../../assets/icons'
import Icon from './Icon.component'

export type IconByTextProps = {
    text: string
}

export default function IconByText(props: IconByTextProps) {
    const type = Object.values(ICON_MAP).find((value) =>
        props.text.includes(value)
    )
    if (!type) {
        return null
    }

    return <Icon type={type} />
}
