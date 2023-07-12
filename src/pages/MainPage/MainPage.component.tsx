import Cities from '../Cities'
import Countries from '../Countries'
import Holidays from '../../screens/Holidays'
import Greeting from '../../screens/Greeting'
import Verification from '../../screens/Verification'
import LogInForm from '../../screens/LogInForm'
import Footer from '../../components/Footer/Footer.component'
import Quote from '../../components/Quote'
import Spinner from '../../components/Spinner/Spinner.component'

import { useAuthContext } from '../../context/Auth.Context'
import { useEffect, useState } from 'react'

import './MainPage.style.css'

export default function MainPage() {
    const authOptions = useAuthContext()
    const [countries, setCountries] = useState<null | any[]>(null)
    const [countryCode, getCountryCode] = useState<any>()
    const [countryName, getCountryName] = useState<any>()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            authOptions?.logIn
        }
    }, [authOptions?.isLogin])

    const logout = () => {
        localStorage.clear()
        !authOptions?.logOut
    }

    return (
        <div className="main-page">
            <Greeting logout={logout} />
            <Quote>
                The <span>journey</span> of a thousand miles begins with a
                single <span>step</span>.
            </Quote>
            <LogInForm />
            {authOptions?.isLogin ? <span>Hello!</span> : <Spinner />}

            {/* {authOptions?.isLogin && (
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

            {authOptions?.isLogin && <Verification />} */}

            <Footer />
        </div>
    )
}
