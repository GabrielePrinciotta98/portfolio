import "../styles/NavBar.css"

import { useState, type JSX } from "react";
import { siteData, navLinks } from "../data";

import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const contactIcons: Record<string, JSX.Element> = {
  linkedin: <FaLinkedin />,
  email: <MdEmail />,
  phone: <FaPhone />,
  github: <FaGithub />
}

export default function NavBar(){
    const [activeLink, setActiveLink] = useState("#about");

    return (
        <aside className="navbar">
            <div className="navbar__header">
                <img src="/profile.jpg" alt={siteData.fullName} className="navbar__profilePic"></img>
                <h1>{siteData.fullName}</h1>
                <h3>{siteData.title}</h3>
            </div>

            <ul className="navbar__contacts">
                {siteData.contacts.map(contact => (
                    <li key={contact.label}>
                        <a href={contact.href} target="_blank" rel="noopener noreferrer" className="contact-btn">
                            {contactIcons[contact.icon]}
                            {contact.label}
                        </a>
                    </li>
                ))}
            </ul>

            <hr />
                

            <nav className="navbar__nav">
                <ul>
                    {navLinks.map(link => (
                        <li key={link.label}>
                            <a href={link.href}
                                onClick={() => setActiveLink(link.href)}
                                className={activeLink === link.href ? "nav-link active" : "nav-link"}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}