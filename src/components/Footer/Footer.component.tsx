import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import './footer.style.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <a href="https://github.com/KseniyaBoldak/ReactApp-HolidayViewer">
                    <GitHubIcon />
                </a>
                <FacebookIcon />
            </div>
        </footer>
    )
}
Footer.displayName = 'Footer'
export default Footer
