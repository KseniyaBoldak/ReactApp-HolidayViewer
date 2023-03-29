import MainPage from './pages/MainPage/MainPage.component'
import AuthContext from './common/context/Auth.Context'

function App() {
    return (
        <AuthContext>
            <div className="App">
                <MainPage />
            </div>
        </AuthContext>
    )
}

export default App
