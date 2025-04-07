import "./Header.css"



function Header() {
    return (
        <header>

            <img className="logo" src="public/logo.jpg" alt="logo" />
            <h2>Notre système solaire</h2>
            <nav>
                <ul>
                    <li>< a href="">Home</a></li>
                    <li><a href="">About</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;