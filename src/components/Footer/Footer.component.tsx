import './footer.style.css'
import ICON_MAP from '../../assets/icons'
import Icon from '../Icon'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <a href="https://github.com/KseniyaBoldak/ReactApp-HolidayViewer">
                    <Icon.Github />
                </a>
                <Icon.Facebook />
            </div>
        </footer>
    )
}
