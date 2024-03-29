import ICON_MAP from '../../assets/icons'
import Image from './Image.component'

export type ImageByTextProps = {
    text: string
}

export default function ImageByText(props: ImageByTextProps) {
    const { text } = props
    const type = Object.values(ICON_MAP).find((value) => text.includes(value))

    if (!type) {
        return null
    }

    return <Image src={type} />
}
