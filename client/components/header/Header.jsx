export default function Header() {
    return (
        <header className="header-section">
            <div className="header-warp">
                <div className="header-bar-warp d-flex">
                    {/* <!-- site logo --> */}
                    <a href="/" className="site-logo">
                        <img src="/img/logo.png" alt="" />
                    </a>
                    <nav className="top-nav-area w-100">
                        <div className="user-panel">
                            <a href="">Login</a> / <a href="">Register</a>
                        </div>
                        {/* <!-- Menu --> */}
                        <ul className="main-menu primary-menu">
                            <li><a href="/">Home</a></li>
                            <li><a href="games.html">Games</a>
                                <ul className="sub-menu">
                                    <li><a href="game-single.html">Game Singel</a></li>
                                </ul>
                            </li>
                            <li><a href="review.html">Reviews</a></li>
                            <li><a href="blog.html">News</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};