import { ImageWithMap } from '../Image'
import './Footer.style.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <a href="https://github.com/KseniyaBoldak/ReactApp-HolidayViewer">
                    <ImageWithMap type="github" />
                </a>

                <ImageWithMap type="facebook" />
            </div>
        </footer>
    )
}
