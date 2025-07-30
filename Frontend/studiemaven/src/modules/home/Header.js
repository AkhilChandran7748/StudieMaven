import React, { useState, Fragment } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Menu } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaBars } from 'react-icons/fa';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import LoginModal from './LoginModal';
import brandLogo from '../../assets/brand-logo.png';
import "./Header.scss";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import { RENDER_URL } from "../../Utils/Urls";

// --- Country flags imports ---
import flagGermany from '../../assets/flag-GE.png';
import flagCanada from '../../assets/flag-Canada.png';
import flagAustralia from '../../assets/flag-Australia.png';
import flagUK from '../../assets/flag-UK.png';
import flagSweden from '../../assets/flag-Sweden.png';


const aboutUs = [
  { label: 'Our Profile', to: RENDER_URL.ABOUTUS  },
  { label: 'Why StudieMaven', to: RENDER_URL.WHY_US  },
  { label: 'Awards and Achievements' },
  { label: 'Our Team' },
  { label: 'Events'  },
  { label: 'Gallery' },
];

const services = [
  { label: 'Visa Guidance', to: RENDER_URL.SERVICES + "#visa" },
  { label: 'Counseling', to: RENDER_URL.SERVICES + "#counseling" },
  { label: 'Accommodation', to: RENDER_URL.SERVICES + "#accommodation" },
  { label: 'Scholarships', to: RENDER_URL.SERVICES + "#scholarships" },
];

const courses = [
  { label: 'Undergraduate', to: RENDER_URL.COURSES + "#ug" },
  { label: 'Postgraduate', to: RENDER_URL.COURSES + "#pg" },
  { label: 'Language Courses', to: RENDER_URL.COURSES + "#language" },
  { label: 'Professional Courses', to: RENDER_URL.COURSES + "#professional" },
];

const countries = [
  { label: 'Germany', to: RENDER_URL.COUNTRIES + "#germany", flag: flagGermany },
  { label: 'Canada', to: RENDER_URL.COUNTRIES + "#canada", flag: flagCanada },
  { label: 'Australia', to: RENDER_URL.COUNTRIES + "#australia", flag: flagAustralia },
  { label: 'UK', to: RENDER_URL.COUNTRIES + "#uk", flag: flagUK },
  { label: 'USA', to: RENDER_URL.COUNTRIES + "#usa", flag: flagSweden },
];

const navLinks = [
  { label: 'HOME', to: "/" },
  { label: 'ABOUT US', to: RENDER_URL.ABOUT }, // Updated
  { label: 'CONTACT US', to: RENDER_URL.CONTACT },
  { label: 'PARTNER WITH US', to: RENDER_URL.ASSOCIATE_WITH_US }, // You can update the path if needed
  { label: 'FAQs', to: RENDER_URL.FAQS }, // Added
];

const dropdownMenuVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98, pointerEvents: 'none' },
  visible: { opacity: 1, y: 0, scale: 1, pointerEvents: 'auto', transition: { type: 'spring', stiffness: 320, damping: 22, duration: 0.38 } },
  exit: { opacity: 0, y: 10, scale: 0.98, pointerEvents: 'none', transition: { duration: 0.15 } }
};

const DropMenu = ({ title, items, isCountryMenu }) => (
  <Menu as="div" className="nav-dropdown">
    {({ open }) => (
      <>
        <Menu.Button
          className={`nav-link dropdown-toggle ${open ? 'active' : ''}`}
          as="div"
          role="button"
          tabIndex={0}
        >
          {title}
          <FaChevronDown size={12} style={{ marginLeft: 5, transition: 'transform 0.26s', transform: open ? 'rotate(-180deg)' : 'none' }}/>
        </Menu.Button>
        <AnimatePresence>
          {open && (
            <Menu.Items
              as={motion.ul}
              static
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownMenuVariants}
              className="dropdown-menu-futuristic"
              data-headlessui-state={open ? "open" : ""}
            >
              {items.map((item, idx) => (
                <Menu.Item key={idx} as={Fragment}>
                  {({ active }) => (
                    <li>
                      <Link
                        className={`dropdown-item-futuristic${active ? ' active' : ''}`}
                        to={item.to}
                      >
                        {isCountryMenu && item.flag && (
                          <img src={item.flag} alt={`${item.label} flag`} style={{ width: 18, height: 13, marginRight: 8, verticalAlign: 'middle', borderRadius: 2, display: 'inline-block' }} />
                        )}
                        {item.label}
                      </Link>
                    </li>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          )}
        </AnimatePresence>
      </>
    )}
  </Menu>
);

const DrawerMenu = ({ isOpen, onClose, showLogin, setShowLogin }) => {
  const [expanded, setExpanded] = useState({});

  const handleExpand = (key) => {
    setExpanded((prev) => ({
      ...Object.keys(prev).reduce((acc, k) => ({ ...acc, [k]: false }), {}),
      [key]: !prev[key],
    }));
  };

  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      direction="left"
      className="mobile-modern-drawer"
      size={280}
      style={{ background: "#fff" }}
      overlayOpacity={0.14}
      lockBackgroundScroll
    >
      <div className="drawer-header">
        <img src={brandLogo} alt="Logo" className="drawer-logo" />
        <Button className="drawer-close-btn" onClick={onClose} aria-label="Close Drawer">
          ×
        </Button>
      </div>
      <nav className="drawer-nav">
        {/* Main links */}
        <Link to="/" className="drawer-link" onClick={onClose}>HOME</Link>
        <Link to={RENDER_URL.ABOUTUS} className="drawer-link" onClick={onClose}>ABOUT US</Link>
        <Link to={RENDER_URL.CONTACT} className="drawer-link" onClick={onClose}>CONTACT US</Link>
        <Link to={RENDER_URL.ASSOCIATE_WITH_US} className="drawer-link" onClick={onClose}>PARTNER WITH US</Link>
        <Link to={RENDER_URL.FAQS} className="drawer-link" onClick={onClose}>FAQs</Link>
        {/* Dropdowns */}
        <div className="drawer-dropdown">
          <button className={`drawer-link ${expanded['SERVICES'] ? 'active' : ''}`}
            onClick={() => handleExpand('SERVICES')}>
            WHAT WE OFFER
            <FaChevronDown size={13} style={{ marginLeft: 8, transition: 'transform 0.26s', transform: expanded['SERVICES'] ? 'rotate(-180deg)' : undefined }} />
          </button>
          <AnimatePresence>
            {expanded['SERVICES'] && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="drawer-dropdown-list"
              >
                {services.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="drawer-dropdown-item" onClick={onClose}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        <div className="drawer-dropdown">
          <button className={`drawer-link ${expanded['COUNTRIES'] ? 'active' : ''}`}
            onClick={() => handleExpand('COUNTRIES')}>
            COUNTRIES
            <FaChevronDown size={13} style={{ marginLeft: 8, transition: 'transform 0.26s', transform: expanded['COUNTRIES'] ? 'rotate(-180deg)' : undefined }} />
          </button>
          <AnimatePresence>
            {expanded['COUNTRIES'] && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="drawer-dropdown-list"
              >
                {countries.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="drawer-dropdown-item" onClick={onClose}>
                      {item.flag && (
                        <img src={item.flag} alt={`${item.label} flag`} style={{ width: 18, height: 13, marginRight: 8, verticalAlign: 'middle', borderRadius: 2, display: 'inline-block' }} />
                      )}
                      {item.label}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        <div className="drawer-dropdown">
          <button className={`drawer-link ${expanded['COURSES'] ? 'active' : ''}`}
            onClick={() => handleExpand('COURSES')}>
            COURSES
            <FaChevronDown size={13} style={{ marginLeft: 8, transition: 'transform 0.26s', transform: expanded['COURSES'] ? 'rotate(-180deg)' : undefined }} />
          </button>
          <AnimatePresence>
            {expanded['COURSES'] && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="drawer-dropdown-list"
              >
                {courses.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="drawer-dropdown-item" onClick={onClose}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </Drawer>
  );
};

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <Navbar expand="lg" bg="" fixed="" className="headerTop d-none d-lg-block">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand as={Link} to="/"><img src={brandLogo} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/">HOME</Nav.Link>
              <DropMenu title="ABOUT US" items={aboutUs} />
              <DropMenu title="WHAT WE OFFER" items={services} />
              <DropMenu title="COUNTRIES" items={countries} isCountryMenu />
              <DropMenu title="COURSES" items={courses} />
              <Nav.Link as={Link} to={RENDER_URL.CONTACT}>CONTACT US</Nav.Link>
              <Nav.Link as={Link} to={RENDER_URL.ASSOCIATE_WITH_US} className="drawer-link" >PARTNER WITH US</Nav.Link>
              <Nav.Link as={Link} to={RENDER_URL.FAQ}>FAQs</Nav.Link>
              <Button variant="" className="ms-3 btn-primary-cta" onClick={() => setShowLogin(true)}>Login <FiLogIn /></Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Mobile Navbar */}
      <Navbar bg="" fixed="" className="headerTop d-lg-none mobile-navbar">
        <Container>
          <Button className="sidebar-menu-btn" onClick={() => setDrawerOpen(true)}>
            <FaBars size={22} />
          </Button>
          <Navbar.Brand className="mx-auto" as={Link} to="/"><img src={brandLogo} alt="" /></Navbar.Brand>
          <Button
            variant=""
            className="btn-primary-cta"
            onClick={() => setShowLogin(true)} >
            Login <FiLogIn />
          </Button>
        </Container>
      </Navbar>
      {/* Mobile Drawer */}
      <DrawerMenu
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        showLogin={showLogin}
        setShowLogin={setShowLogin}
      />
      <LoginModal show={showLogin} onHide={() => setShowLogin(false)} />
    </>
  );
};

export default Header;