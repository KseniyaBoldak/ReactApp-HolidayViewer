import AdvicesLogIn from '../../screens/AdvicesLogIn/AdvicesLogIn.component'
import LogInForm from '../../screens/LogInForm/LogInForm.component'
import './verification.style.css'

const Verification = () => {
    return (
        <article className="verification">
            <AdvicesLogIn />
            <LogInForm />
        </article>
    )
}
Verification.displayName = 'Verification'
export default Verification
