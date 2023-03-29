import React from 'react'
import './quote.style.css'

export type QuoteProps = React.PropsWithChildren

export default function Quote(props: QuoteProps) {
    return (
        <article className="quoteContainer">
            <div className="quoteImg" />
            <q>{props.children}</q>
        </article>
    )
}
