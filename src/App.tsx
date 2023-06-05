import MainPage from './pages/MainPage/MainPage.component'
import AuthContext from './context/Auth.Context'
import CountryContext from './context/Country.Context'

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
