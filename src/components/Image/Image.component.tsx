import ICON_MAP from '../../assets/icons'

export type ImageTypes = keyof typeof ICON_MAP

export type ImageProps = {
    src?: any
    onClick?: (value?: any) => void
    className?: React.ReactNode
    children?: React.ReactNode
}

export default function Image(props: ImageProps) {
    const { src, onClick, className, children, ...otherProps } = props

    if (!src || !onClick || !className) {
        return null
    }

    return (
        <img className={`"image__"${className}`} {...otherProps}>
            {children}
        </img>
    )
}

export const MapImage = (props: ImageProps) => <Image src={ICON_MAP.map} />

export const HistoryImage = (props: ImageProps) => (
    <Image src={ICON_MAP.history} />
)

export const EntertainmentImage = (props: ImageProps) => (
    <Image src={ICON_MAP.entertainment} />
)

export const FountainImage = (props: ImageProps) => (
    <Image src={ICON_MAP.fountain} />
)

export const MountainImage = (props: ImageProps) => (
    <Image src={ICON_MAP.mountain} />
)

export const MuseumImage = (props: ImageProps) => (
    <Image src={ICON_MAP.museum} />
)

export const ReligionImage = (props: ImageProps) => (
    <Image src={ICON_MAP.religion} />
)

export const SearchImage = (props: ImageProps) => (
    <Image src={ICON_MAP.search} />
)

export const TheatreImage = (props: ImageProps) => (
    <Image src={ICON_MAP.theatre} />
)

export const GithubImage = (props: ImageProps) => (
    <Image src={ICON_MAP.github} />
)

export const FacebookImage = (props: ImageProps) => (
    <Image src={ICON_MAP.facebook} />
)

export const CloseIcon = (props: ImageProps) => <Image src={ICON_MAP.close} />

export const ArrowIcon = (props: ImageProps) => <Image src={ICON_MAP.arrow} />

export const CityImage = (props: ImageProps) => <Image src={ICON_MAP.city} />
