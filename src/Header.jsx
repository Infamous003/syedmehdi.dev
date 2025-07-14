import { Link } from "react-router-dom"

export default function Header() {
    return(
        <header>
            <div className="left-section">
                {/* <img src="" alt="" /> */}
                <h1 className="my-name">Syed Mehdi</h1>
            </div>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </nav>
        </header>
    )
}