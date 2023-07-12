import key from 'weak-key'

export type AdviceProps = {
    text?: {
        text: string
    }
}

export default function Advice(props: AdviceProps) {
    const { text } = props

    if (!text) {
        return null
    }

    return (
        <p className="advices__title" key={key(text)}>
            {text.text}
        </p>
    )
}
