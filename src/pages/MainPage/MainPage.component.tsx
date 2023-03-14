import Quote from '../../components/Quote/Quote.component'
import Countries from '../Countries/Countries.component'
import Holidays from '../../screens/Holidays/Holidays.component'
import Cities from '../Cities/Cities.component'
import Verification from '../Verification/Verification.component'
import Footer from '../../components/Footer/Footer.component'
import Greeting from '../../components/Greeting/Greeting.component'
import Context from '../../common/context/context'
import { useContext, useEffect, useState } from 'react'
import './mainPage.style.css'

const MainPage = () => {
    const { login, setLogin } = useContext(Context)
    const [countryCode, getCountryCode] = useState<any>()
    const [countryName, getCountryName] = useState<any>()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            return setLogin(true)
        }
    }, [setLogin])

    const logout = () => {
        localStorage.clear()
        setLogin(false)
    }

    return (
        <div className="main-page">
            <Greeting logout={logout} />
            <Quote />
            {login ? (
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
