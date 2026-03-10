import "../styles/NavBar.css"

import { useState, type JSX } from "react";
import { contactData, navLinks } from "../data";

import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import { FaSun, FaMoon } from "react-icons/fa"
import { MdEmail } from 'react-icons/md'
import { FaDownload } from 'react-icons/fa'
import { cvUrl } from '../data'

const contactIcons: Record<string, JSX.Element> = {
    email: <MdEmail />,
    linkedin: <FaLinkedin />,
    github: <FaGithub />,
    phone: <FaPhone />
}

type NavBarProps = {
    isDark: boolean
    onThemeToggle: () => void
}

export default function NavBar({ isDark, onThemeToggle }: NavBarProps) {
    const [activeLink, setActiveLink] = useState("#about");


    const [isItalian, setIsItalian] = useState(false)

    return (
        <aside className="navbar">
            <div className="navbar__header">
                <img src="/profile.jpg" alt={contactData.fullName} className="navbar__profilePic"></img>
                <h1>{contactData.fullName}</h1>
                <h3>{contactData.titles.map((title) => {
                    return <span key={title}>{title}</span>
                })}
                </h3>
            </div>

            <ul className="navbar__contacts">
                {contactData.contacts.map(contact => (
                    <li key={contact.label}>
                        <a href={contact.href} target="_blank" rel="noopener noreferrer" className="contact-btn">
                            {contactIcons[contact.icon]}
                            {contact.label}
                        </a>
                    </li>
                ))}
            </ul>

            <a href={cvUrl} download className="contact-btn cv-btn">
                <FaDownload /> Download my CV
            </a>

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
            <div className="navbar__toggles">
                <button
                    className="navbar__toggle"
                    title={isDark ? "Switch to light mode" : "Switch to dark mode"}
                    onClick={onThemeToggle}
                >
                    {isDark ? <FaSun /> : <FaMoon />}
                </button>
                {/* <button
                    className="navbar__toggle navbar__toggle--lang"
                    title={isItalian ? "Switch to English" : "Passa all'Italiano"}
                    onClick={() => setIsItalian(!isItalian)}
                >
                    {isItalian ? "EN" : "IT"}
                </button> */}
            </div>
        </aside>
    )
}