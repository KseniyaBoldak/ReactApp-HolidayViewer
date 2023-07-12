import MainPage from './pages/MainPage/MainPage.component'
import CountryContext from './context/Country.Context'
import AuthContext from './context/Auth.Context'

function App() {
    return (
        <AuthContext>
            <CountryContext>
                <div className="App">
                    <MainPage />
                </div>
            </CountryContext>
        </AuthContext>
    )
}

export default App
