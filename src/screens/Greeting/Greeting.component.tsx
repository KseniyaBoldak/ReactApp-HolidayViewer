import Button from '../../components/Button'
import { ImageWithMap } from '../../components/Image'
import { useAuthContext } from '../../context/Auth.Context'

import './Greeting.style.css'

export type GreetingProps = {
    logout?: () => void
}

export default function Greeting(props: GreetingProps) {
    const authOptions = useAuthContext()
    const { logout, ...otherProps } = props

    return (
        <ImageWithMap
            type={'mainbackground'}
            className={'greeting'}
            {...otherProps}
        >
            <nav>
                <h3 className="greeting__logo">
                    <ImageWithMap className="greeting__icon" type="map" />
                    <span>Holiday Viewer</span>
                </h3>
                {authOptions?.isLogin && (
                    <Button
                        className="sign-out"
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
        </ImageWithMap>
    )
}
