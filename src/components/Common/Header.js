import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="logo">
                            <NavLink to="/">
                                <img src="/img/logo.png" alt="" />
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <nav className="nav-menu">
                            <ul>
                                <li className="active">
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/classes">Classes</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blog">Blog</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="top-option">
                            <div className="to-social">
                                <NavLink to="#">
                                    <i className="fa fa-facebook"></i>
                                </NavLink>
                                <NavLink to="#">
                                    <i className="fa fa-twitter"></i>
                                </NavLink>
                                <NavLink to="#">
                                    <i className="fa fa-youtube-play"></i>
                                </NavLink>
                                <NavLink to="#">
                                    <i className="fa fa-instagram"></i>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="canvas-open">
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </header>
    );
}

export default Header;