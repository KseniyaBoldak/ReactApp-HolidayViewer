import Quote from '../../components/Quote'
import Countries from '../Countries'
import Holidays from '../../screens/Holidays'
import Cities from '../Cities'
import Verification from '../Verification'
import Footer from '../../components/Footer/Footer.component'
import Greeting from '../../components/Greeting'
import { useAuthContext } from '../../common/context/Auth.Context'
import { useEffect, useState } from 'react'
import './mainPage.style.css'

const MainPage = () => {
    const authOptions = useAuthContext()
    const [countryCode, getCountryCode] = useState<any>()
    const [countryName, getCountryName] = useState<any>()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            return authOptions?.setLogin(true)
        }
    }, [authOptions?.setLogin])

    const logout = () => {
        localStorage.clear()
        authOptions?.setLogin(false)
    }

    return (
        <div className="main-page">
            <Greeting logout={logout} />
            <Quote>
                The <span>journey</span> of a thousand miles begins with a
                single <span>step</span>.
            </Quote>
            {authOptions?.login ? (
                <section className="country-holiday">
                    <Countries
                        getCountryCode={getCountryCode}
                        getCountryName={getCountryName}
                    />
                    <article className="country-cities">
                        <Holidays
                            countryCode={countryCode}
                            countryName={countryName}
                        />
                    </article>
                    <Cities countryName={countryName} />
                </section>
            ) : (
                <Verification />
            )}
            <Footer />
        </div>
    )
}
MainPage.displayName = 'MainPage'
export default MainPage
