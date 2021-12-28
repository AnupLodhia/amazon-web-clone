import React from "react";
import "./Footer.css";

function Footer() {
    return <div className="footer">
        <div className="footer__container">
            <div className="footer__column">
                <h2 className="footer__heading">Get to Know Us</h2>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Press Releases</a></li>
                    <li><a href="#">Amazon Cares</a></li>
                    <li><a href="#">Gift a Smile</a></li>

                </ul>
            </div>
            <div className="footer__column">
                <h2 className="footer__heading">Connect With Us</h2>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>

                </ul>
            </div>
            <div className="footer__column">
                <h2 className="footer__heading">Make Money with Us</h2>
                <ul>
                    <li><a href="#"> Sell on Amazon</a></li>
                    <li><a href="#">Sell under Amazon Accelerator</a></li>
                    <li><a href="#">Amazon Global Selling</a></li>
                    <li><a href="#"> Become an Affiliate</a></li>
                </ul>
            </div>
        </div>
        <div className="footer__copyRight">
            <p>Copyright &copy; Amazon-Clone.com </p>
        </div>
    </div>;
}

export default Footer;
