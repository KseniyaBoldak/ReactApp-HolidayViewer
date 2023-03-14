import ImageForModalWindow from '../../screens/ImageForModalWindow/ImageForModalWindow.component'
import './modal.style.css'

interface ModalProps {
    visible: boolean
    onClose: () => void
    info: any
}

const Modal = ({ visible = false, onClose, info }: ModalProps) => {
    if (!visible) return null
    if (!info) return null
    return (
        <div className="modal" onClick={onClose}>
            <div className="modal__dialog" onClick={(e) => e.stopPropagation()}>
                <div className="modal__header">
                    <h3 className="modal__title">
                        {info.name ? info.name : 'No name'}
                    </h3>
                    <span className="modal__close" onClick={onClose}>
                        &times;
                    </span>
                </div>
                <div className="modal__body">
                    <div className="modal__info">
                        <p>
                            {info.text
                                ? info.text
                                : 'Unfortunately, there is no information about this sight.'}
                        </p>
                        {info.address ? <p>Address: {info.address} </p> : null}
                        {info.kind ? (
                            <p>Kinds: {info.kind.replaceAll(',', ', ')}</p>
                        ) : null}
                    </div>
                    <div className="modal__image">
                        <ImageForModalWindow kind={info.kind} />
                        <a href={info.map}>View on map</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
Modal.displayName = 'Modal'
export default Modal
