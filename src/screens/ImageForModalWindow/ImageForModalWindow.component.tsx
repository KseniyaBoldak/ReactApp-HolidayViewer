import Image from '../../components/Image/Image.component'

const ImageMap = {
    historic: 'history.png',
    entertainment: 'entertainment.png',
    fountain: 'fountain.png',
    mountain: 'mountain.png',
    museum: 'museum.png',
    religion: 'religion.png',
    theatre: 'theatre.png',
}

type ImageName = keyof typeof ImageMap

const ImageForModalWindow = ({ kind }: { kind: ImageName }) => {
    const src = Object.entries(ImageMap).find(([key]) =>
        kind.includes(key)
    )?.[1]

    return <Image src={src} />
}
ImageForModalWindow.displayName = 'ImageForModalWindow'
export default ImageForModalWindow
