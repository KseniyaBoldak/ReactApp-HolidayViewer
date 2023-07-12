import { ColorRing, MagnifyingGlass } from 'react-loader-spinner'

export const SPINNER_MAP = {
    colorRing: ColorRing,
    search: MagnifyingGlass,
}

export type SpinnerProps = {
    type?: keyof typeof SPINNER_MAP
}
export default function Spinner(props: SpinnerProps) {
    const { type } = props

    return <ColorRing />
}
