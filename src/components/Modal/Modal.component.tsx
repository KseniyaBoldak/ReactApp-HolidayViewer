import { CardContent, CardHeader } from '../Card'
import './Modal.style.css'

export type ModalProps = {
    visible?: boolean
    info?: any
    children?: React.ReactNode
    className?: string
    onClose?: () => void
    onClick?: () => void
}

export default function Modal(props: ModalProps) {
    const { children, className, ...otherProps } = props

    const classNames = require('classnames')
    const modalClass = classNames({ [`modal ${className}`]: true })

    return (
        <div className={modalClass} {...otherProps}>
            <div className="modal__dialog" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

Modal.Header = CardHeader
Modal.Body = CardContent
