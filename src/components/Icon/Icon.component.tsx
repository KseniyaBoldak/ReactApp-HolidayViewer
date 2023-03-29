import { callbackify } from 'util'
import ICON_MAP from '../../assets/icons'
import './icon.style.css'

export type IconTypes = keyof typeof ICON_MAP

export type IconProps = {
    type?: IconTypes
    onClick?: (value: string) => void
}

export default function Icon(props: IconProps) {
    const { type, ...otherProps } = props

    if (!type) {
        return null
    }

    const Component = ICON_MAP[type]

    if (!Component) {
        return null
    }
    return <Component type={type} {...otherProps} />
}
Icon.Search = (props: IconProps) => <Icon type="search" />
Icon.Github = (props: IconProps) => <Icon type="github" />
Icon.Facebook = (props: IconProps) => <Icon type="facebook" />
