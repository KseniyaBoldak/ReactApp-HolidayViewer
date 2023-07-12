import ICON_MAP from '../../assets/icons'

export type ImageTypes = keyof typeof ICON_MAP

export type ImageProps = {
    src?: string
    type?: keyof typeof ICON_MAP
    className?: React.ReactNode
    children?: React.ReactNode
    onClick?: (value?: any) => void
}

export default function Image(props: ImageProps) {
    const { src, type, className, children, ...otherProps } = props
    const img = src ?? (type && ICON_MAP[type])

    const classNames = require('classnames')
    const imageClass = classNames({ [`image ${className}`]: true })

    if (!img) {
        return null
    }

    return (
        <img className={imageClass} src={img} {...otherProps}>
            {children}
        </img>
    )
}

export type ImageWithMapProps = ImageProps & {
    type: keyof typeof ICON_MAP
}

export const ImageWithMap = (props: ImageWithMapProps) => {
    const { type, ...otherProps } = props

    return <Image src={ICON_MAP[type]} {...otherProps} />
}
