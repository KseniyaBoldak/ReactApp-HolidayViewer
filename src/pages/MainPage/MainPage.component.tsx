import Quote from '../../components/Quote'
import Countries from '../Countries'
import Holidays from '../../screens/Holidays'
import Cities from '../Cities'
import Verification from '../../screens/Verification'
import Footer from '../../components/Footer/Footer.component'
import Greeting from '../../screens/Greeting'
import { useAuthContext } from '../../context/Auth.Context'
import { useEffect, useState } from 'react'
import './mainPage.style.css'

export default function MainPage() {
    const authOptions = useAuthContext()
    const [countries, setCountries] = useState<null | any[]>(null)
    const [countryCode, getCountryCode] = useState<any>()
    const [countryName, getCountryName] = useState<any>()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            return authOptions?.login
        }
    }, [authOptions?.isLogin])

    const logout = () => {
        localStorage.clear()
        authOptions?.logout
    }

    return (
        <div className="main-page">
            <Greeting logout={logout} />
            <Quote>
                The <span>journey</span> of a thousand miles begins with a
                single <span>step</span>.
            </Quote>
            {authOptions?.login && (
                <section className="country-holiday">
                    <Countries
                        countries={countries}
                        onCountryNameChange={getCountryName}
                    />
                    <article className="country-cities">
                        <Holidays
                            countryCode={countryCode}
                            countryName={countryName}
                        />
                    </article>
                    <Cities countryName={countryName} />
                </section>
            )}

            {authOptions?.login && <Verification />}

            <Footer />
        </div>
    )
}
