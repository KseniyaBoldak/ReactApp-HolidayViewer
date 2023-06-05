import Button from '../../components/Button'
import { MapImage } from '../../components/Image'
import { useAuthContext } from '../../context/Auth.Context'
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
                    <MapImage className="greeting__icon" />
                    <span>Holiday Viewer</span>
                </h3>
                {authOptions?.login && (
                    <Button
                        className="greeting__button-sign-out"
                        onClick={logout}
                        text="Sign Out"
                    />
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
