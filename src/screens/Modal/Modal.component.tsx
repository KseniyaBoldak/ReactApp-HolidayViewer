import { CardContent, CardHeader } from '../../components/Card'
import './modal.style.css'

export type ModalProps = {
    visible?: boolean
    onClose?: () => void
    info?: any
    onClick?: () => void
    children?: any
    className?: string
}

export default function Modal(props: ModalProps) {
    const { children, className, ...otherProps } = props
    return (
        <div className={`"modal"${className}`} {...otherProps}>
            <div className="modal__dialog" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

Modal.Header = CardHeader
Modal.Body = CardContent
