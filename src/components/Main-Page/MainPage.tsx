import Countries from '../Countries/Countries';
import './main-page-style.css';
import LogInForm from '../LoginForm/LogInForm';
import Context from '../context/context';
import { useContext, useEffect, useState } from 'react';
import Holidays from '../Holidays/Holidays';
import Quote from '../Quote/Quote';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import Cities from '../Cities/Cities';


const MainPage = () => {
    const { login, setLogin } = useContext(Context);
    const [countryCode, getCountryCode] = useState<any>();
    const [countryName, getCountryName] = useState<any>();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            return setLogin(true);
        }
    }, [setLogin]);

    const logout = () => {
        localStorage.clear();
        setLogin(false);
    };

    return (
        <>
            <main className='greeting'>
                <nav >
                    <h3 className='logo'> <div className='map'></div> <span>Holiday Viewer</span></h3>
                    {login ?
                        <button className='sign-out' onClick={logout}>Sign Out</button>
                        :
                        null}
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
            {login ?
                <section className="country-holiday">
                    <Countries getCountryCode={getCountryCode} getCountryName={getCountryName} />
                    <article className="country-cities">
                        <Holidays countryCode={countryCode} countryName={countryName} />
                    </article>
                    <Cities countryName={countryName}/>
                </section>
                :
                <LogInForm />
            }
            <footer>
                <div>
                    <a href="https://github.com/KseniyaBoldak/ReactApp-HolidayViewer">
                        <GitHubIcon/>
                    </a>
                    <FacebookIcon/> 
                </div> 
            </footer>
        </>
    )
}

export default MainPage;


/* 
https://date.nager.at/
https://opentripmap.io/docs#/
https://documenter.getpostman.com/view/1134062/T1LJjU52#4829d16f-0f4e-43ec-886e-68ebad1221d8
 */