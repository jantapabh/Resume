import { useState } from "react"

const Navbar = () => {
    const [statusmenu, setStatusmenu] = useState(false)
    return (
        <>
        <div className="header-topbar">
            <img src="/static/image/profile.jpg" alt="" className="logo" />
            <nav className="navbar-pc">
                <ul className="nav-area">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Eduction</a></li>
                    <li><a href="#">Achievement</a></li>
                </ul>
            </nav>


            <nav className="navbar-mobile">
                <i className="fas fa-bars" onClick={() => setStatusmenu(!statusmenu)}></i>
                <div className={`list-mobile ${statusmenu ? "" : "close"}`}>
                        <ul>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Education</a></li>
                            <li><a href="#">Skill</a></li>
                            <li><a href="#">Achievement</a></li>
                        </ul>
                    </div>
            </nav>
        </div>
            <div className="slide-btn" >
            <a>SET INDEX <i class="fas fa-caret-up"></i></a>
        </div>
    </>

    )
}

export default Navbar;