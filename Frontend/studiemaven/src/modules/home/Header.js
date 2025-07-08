import React, { useState, Fragment } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Menu, Transition } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaBars } from 'react-icons/fa';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import LoginModal from './LoginModal';
import brandLogo from '../../assets/brand-logo.png';
import "./Header.scss";
import { FiLogIn } from "react-icons/fi";

const dropdownMenuVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98, pointerEvents: 'none' },
  visible: { opacity: 1, y: 0, scale: 1, pointerEvents: 'auto', transition: { type: 'spring', stiffness: 320, damping: 22, duration: 0.38 } },
  exit: { opacity: 0, y: 10, scale: 0.98, pointerEvents: 'none', transition: { duration: 0.15 } }
};

const services = [
  { label: 'Visa Guidance', href: '#visa' },
  { label: 'Counseling', href: '#counseling' },
  { label: 'Accommodation', href: '#accommodation' },
  { label: 'Scholarships', href: '#scholarships' },
];

const courses = [
  { label: 'Undergraduate', href: '#ug' },
  { label: 'Postgraduate', href: '#pg' },
  { label: 'Language Courses', href: '#language' },
  { label: 'Professional Courses', href: '#professional' },
];

const countries = [
  { label: 'Germany', href: '#germany' },
  { label: 'Canada', href: '#canada' },
  { label: 'Australia', href: '#australia' },
  { label: 'UK', href: '#uk' },
  { label: 'USA', href: '#usa' },
];

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'WHY STUDIEMAVEN', href: '#about' },
  { label: 'REFERRAL PROGRAM', href: '#contact' },
  { label: 'CONTACT US', href: '#contact' },
];

const DropMenu = ({ title, items }) => (
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
                      <a
                        className={`dropdown-item-futuristic${active ? ' active' : ''}`}
                        href={item.href}
                      >
                        {item.label}
                      </a>
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
        {navLinks.slice(0, 2).map((nav) =>
          <a key={nav.label} href={nav.href} className="drawer-link" onClick={onClose}>
            {nav.label}
          </a>
        )}
        <div className="drawer-dropdown">
          <button className={`drawer-link ${expanded['SERVICES'] ? 'active' : ''}`}
            onClick={() => handleExpand('SERVICES')}>
            SERVICES
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
                    <a href={item.href} className="drawer-dropdown-item" onClick={onClose}>
                      {item.label}
                    </a>
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
                    <a href={item.href} className="drawer-dropdown-item" onClick={onClose}>
                      {item.label}
                    </a>
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
                    <a href={item.href} className="drawer-dropdown-item" onClick={onClose}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        
        {navLinks.slice(2).map((nav) =>
          <a key={nav.label} href={nav.href} className="drawer-link" onClick={onClose}>
            {nav.label}
          </a>
        )}
      
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
          <Navbar.Brand href="#"><img src={brandLogo} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#about">WHY STUDIEMAVEN</Nav.Link>
              <DropMenu title="SERVICES" items={services} />
              <DropMenu title="COURSES" items={courses} />
              <DropMenu title="COUNTRIES" items={countries} />
              <Nav.Link href="#contact">REFERRAL PROGRAM</Nav.Link>
              <Nav.Link href="#contact">CONTACT US</Nav.Link>
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
          <Navbar.Brand className="mx-auto"><img src={brandLogo} alt="" /></Navbar.Brand>
          <Button
            variant=""
            className="btn-primary-cta"
            style={{ fontSize: 14, padding: "2px 16px" }}
            onClick={() => setShowLogin(true)}
          >
            Login
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