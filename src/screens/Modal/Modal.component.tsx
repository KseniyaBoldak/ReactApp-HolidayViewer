import IconByText from '../../components/Icon/IconByText.component'
import './modal.style.css'

export type ModalProps = {
    visible?: boolean
    onClose?: () => void
    info?: any
}

export default function Modal(props: ModalProps) {
    const { visible = false, onClose, info } = props
    if (!visible || !info) return null

    const sightInfo = {
        name: info.name ? info.name : 'No name',
        text: info.text
            ? info.text
            : 'Unfortunately, there is no information about this sight.',

        address: info.address ? <p>Address: {info.address} </p> : null,
        kinds: info.kind ? (
            <p>Kinds: {info.kind.replaceAll(',', ', ')}</p>
        ) : null,
    }

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal__dialog" onClick={(e) => e.stopPropagation()}>
                <div className="modal__header">
                    <h3 className="modal__title">{sightInfo.name}</h3>
                    <span className="modal__close" onClick={onClose}>
                        &times;
                    </span>
                </div>
                <div className="modal__body">
                    <div className="modal__info">
                        <p>{sightInfo.text}</p>
                        {sightInfo.address}
                        {sightInfo.kinds}
                    </div>
                    <div className="modal__image">
                        <IconByText text={info.kind} />
                        <a href={info.map}>View on map</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
