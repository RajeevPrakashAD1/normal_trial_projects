import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import HelpIcon from '@material-ui/icons/Help';

import HomeIcon from '@material-ui/icons/Home';

export default function SideNav() {
    const [showMenu,setShowMenu] = useState(true);
    const [showBurger,setShowBurger] = useState(false);

    const handleBurgerClick = () => {
        setShowMenu(!showMenu);
        setShowBurger(!showBurger);

    }

    const handleCloseClick = () => {
        setShowBurger(!showBurger);
        setShowMenu(!showMenu);
    }

	return (
		<div >
			<div className={`burger-nav ${showBurger && "visibility"}`} onClick={handleBurgerClick}>
				<Link>
					<MenuIcon style={{ fontSize: 40 }} />{' '}
				</Link>
			</div>
			<div className={`sidenav ${showMenu && "visibility"}`}>
				<h1 className="side-bar-title"> Codding Addict</h1>
				<button onClick={handleCloseClick} className="side-bar-close-button">
					<CloseIcon style={{ fontSize: 40 }} />
				</button>
				<div className="sidebar-links">
					<Link className="side-bar-link " to="/">
						<HomeIcon style={{ color: 'aqua' }} />
						<span className="side-bar-li">Home</span>
					</Link>
					<Link className="side-bar-link">
						<InfoIcon style={{ color: 'aqua' }} />
						<span className="side-bar-li">About </span>
					</Link>
					<Link className="side-bar-link">
						<ContactPhoneIcon style={{ color: 'aqua' }} />
						<span className="side-bar-li">Contact</span>
					</Link>
					<Link className="side-bar-link">
						<HelpIcon style={{ color: 'aqua' }} />
						<span className="side-bar-li">Service</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
