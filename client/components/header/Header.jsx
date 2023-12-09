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
                            <a href="/login">Login </a>
                            <a href="/register">Register </a>

                        </div>
                        {/* <!-- Menu --> */}
                        <ul className="main-menu primary-menu">
                            <li><a href="games.html">Games</a></li>
                            <li><a href="review.html">All Posts</a></li>
                            <li><a href="/create-post">Create Blog Post</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};