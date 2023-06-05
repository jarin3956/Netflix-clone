import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div>
            <footer className="footer">
            <div className="footer__links">
                <a href="#">Home</a>
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Contact Us</a>
            </div>
            <div className="footer__social-media">
                <a href="https://www.facebook.com">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.twitter.com">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
            <p className="footer__text">© 2023 Eniac. All rights reserved.</p>
        </footer>
        </div>

    )
}

export default Footer