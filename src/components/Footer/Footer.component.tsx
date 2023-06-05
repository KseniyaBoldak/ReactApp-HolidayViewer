import { FacebookImage, GithubImage } from '../Image'
import './footer.style.css'

export type FooterProps = {}

export default function Footer(props: FooterProps) {
    return (
        <footer className="footer">
            <div className="footer__content">
                <a href="https://github.com/KseniyaBoldak/ReactApp-HolidayViewer">
                    <GithubImage />
                </a>
                <FacebookImage />
            </div>
        </footer>
    )
}
