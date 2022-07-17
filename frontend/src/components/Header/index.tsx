import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>Meta Sales</h1>
                <p>
                    Developed by
                    <a href="https://www.linkedin.com/in/martimjunior/" target="_blank"> @martimpalmeira</a>
                </p>
            </div>
        </header>
    )
}

export default Header