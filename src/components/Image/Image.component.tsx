import './image.style.css'

export type ImageProps = {
    src?: string
}

const Image = (props: ImageProps) => {
    return (
        <img
            className="image"
            src={require(`../../assets/icons/${props.src}`)}
            alt=""
        />
    )
}
Image.displayName = 'Image'
export default Image
