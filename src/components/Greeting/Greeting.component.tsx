import { useContext } from 'react'
import Context from '../../common/context/context'
import './greeting.style.css'

export type GreetingProps = {
    logout?: () => void
}

const Greeting = (props: GreetingProps) => {
    const { login } = useContext(Context)
    return (
        <main className="greeting">
            <nav>
                <h3 className="greeting__logo">
                    {' '}
                    <div className="greeting__icon"></div>{' '}
                    <span>Holiday Viewer</span>
                </h3>
                {login ? (
                    <button
                        className="greeting__button-sign-out"
                        onClick={props.logout}
                    >
                        Sign Out
                    </button>
                ) : null}
            </nav>
            <header className="greeting__moto">
                <h1>
                    Explore and Plan Your
                    <br />
                    <span>Holidays</span>
                    <br />
                    Worldwide
                </h1>
            </header>
        </main>
    )
}
Greeting.displayName = 'Greeting'
export default Greeting
