import Modal, { ModalProps } from '.'
import IconByText from '../../components/Image/ImageByText.component'

export default function SightModal(props: ModalProps) {
    const { visible = false, onClose, info } = props
    if (!visible || !info) return null

    const sightInfo = {
        name: info.name ? info.name : 'No name',
        text: info.text
            ? info.text
            : 'Unfortunately, there is no information about this sight.',

        address: info.address ? <p>Address: {info.address} </p> : null,
        kinds: info.kind && <p>Kinds: {info.kind.replaceAll(',', ', ')}</p>,
    }

    return (
        <Modal className="__sight" onClick={onClose}>
            <Modal.Header
                className="modal__header"
                title={sightInfo.text}
                onCloseClick={onClose}
            >
                <h3 className="modal__title">{sightInfo.name}</h3>
                <span className="modal__close" onClick={onClose}>
                    &times;
                </span>
            </Modal.Header>
            <Modal.Body className="modal__body">
                <div className="modal__info">
                    <p>{sightInfo.text}</p>
                    {sightInfo.address}
                    {sightInfo.kinds}
                </div>
                <div className="modal__image">
                    <IconByText text={info.kind} />
                    <a href={info.map}>View on map</a>
                </div>
            </Modal.Body>
        </Modal>
    )
}
