import { ImageWithMap } from '../Image'
import './Quote.style.css'

export type QuoteProps = React.PropsWithChildren & {
    text?: React.ReactNode
    children?: React.ReactNode
}

export default function Quote(props: QuoteProps) {
    const { text, children, ...otherProps } = props

    return (
        <article className="quote" {...otherProps}>
            <ImageWithMap type="arrow" className="quote__image" />
            <q className="quote__text">
                {text}
                {children}
            </q>
        </article>
    )
}
