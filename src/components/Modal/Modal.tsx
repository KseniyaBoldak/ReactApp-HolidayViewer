import Icon from '../Icons/Icon'
import Spinner from '../Spinner/Spinner'
import './modal-style.css'

interface ModalProps {
    visible: boolean
    onClose: () => void
    info: any
}

const Modal = ({ visible = false, onClose, info }: ModalProps) => {
    if (!visible) return null
    if (!info) return null
    return (
        <div className='modal' onClick={onClose}>
            <div className='modal-dialog' onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <h3 className='modal-title'>{info.name ? info.name : 'No name'}</h3>
                    <span className='modal-close' onClick={onClose}>
                        &times;
                    </span>
                </div>
                <div className='modal-body'>
                    <p>{info.text ? info.text : 'Unfortunately, there is no information about this sight.'}</p>
                    {info.address ? <p>Address: {info.address} </p>: null}
                    {info.kind ? <p>Kinds: {info.kind.replaceAll(',', ', ')}</p> : null}
                    <Icon kind={info.kind}/>
                    <a href={info.map}>View on map</a>
                </div>
            </div>
        </div>
    )
}
export default Modal;