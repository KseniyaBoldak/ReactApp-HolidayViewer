import { useAuthContext } from '../../common/context/Auth.Context'
import './greeting.style.css'

export type GreetingProps = {
    logout?: () => void
}

export default function Greeting(props: GreetingProps) {
    const authOptions = useAuthContext()
    const { logout, ...otherProps } = props

    return (
        <main className="greeting" {...otherProps}>
            <nav>
                <h3 className="greeting__logo">
                    {' '}
                    <div className="greeting__icon"></div>{' '}
                    <span>Holiday Viewer</span>
                </h3>
                {authOptions?.login && (
                    <button
                        className="greeting__button-sign-out"
                        onClick={logout}
                    >
                        Sign Out
                    </button>
                )}
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
