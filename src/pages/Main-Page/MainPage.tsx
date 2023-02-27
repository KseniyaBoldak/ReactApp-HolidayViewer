import LogInForm from '../../screens/LogInForm'
import Quote from '../../components/Quote.component'
import Countries from '../Countries/Countries'
import Holidays from '../Holidays/Holidays'
import Cities from '../Cities/Cities'
import Context from '../../common/context/context'
import { useContext, useEffect, useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import '../../assets/styles/main-page-style.css'

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
    <>
      <main className="greeting">
        <nav>
          <h3 className="logo">
            {' '}
            <div className="map"></div> <span>Holiday Viewer</span>
          </h3>
          {login ? (
            <button className="sign-out" onClick={logout}>
              Sign Out
            </button>
          ) : null}
        </nav>
        <header className="moto">
          <h1>
            Explore and Plan Your
            <br />
            <span>Holidays</span>
            <br />
            Worldwide
          </h1>
        </header>
      </main>
      <Quote />
      {login ? (
        <section className="country-holiday">
          <Countries
            getCountryCode={getCountryCode}
            getCountryName={getCountryName}
          />
          <article className="country-cities">
            <Holidays countryCode={countryCode} countryName={countryName} />
          </article>
          <Cities countryName={countryName} />
        </section>
      ) : (
        <LogInForm />
      )}
      <footer>
        <div>
          <a href="https://github.com/KseniyaBoldak/ReactApp-HolidayViewer">
            <GitHubIcon />
          </a>
          <FacebookIcon />
        </div>
      </footer>
    </>
  )
}

export default MainPage
