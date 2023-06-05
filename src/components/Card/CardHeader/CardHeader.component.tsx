import { CloseIcon, ImageTypes } from '../../Image'
import './card-header.style.css'

export type CardHeaderProps = {
    icon?: ImageTypes
    title?: React.ReactNode
    children?: React.ReactNode
    className?: React.ReactNode
    onCloseClick?: () => void
}

export function CardHeader(props: CardHeaderProps) {
    const { icon, title, children, onCloseClick, className, ...otherProps } =
        props

    return (
        <div className={`"card-header__"${className}`} {...otherProps}>
            <p className="card-header__title">{title}</p>
            <CloseIcon className="card-header__icon" />
            {children}
        </div>
    )
}
