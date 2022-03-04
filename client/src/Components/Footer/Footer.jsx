import React from "react";
import facebookLogo from "../../noklerutils/footer_icon_facebook.png"
import igLogo from "../../noklerutils/footer_icon_instagram.png"
import linkedinLogo from "../../noklerutils/footer_icon_linkedin.png"
import twitchLogo from "../../noklerutils/footer_icon_twitch.png"
import ytLogo from "../../noklerutils/footer_icon_youtube.png"
import noklerLogo from "../../noklerutils/footer_nokler_logo.png"

export default function Footer(){
    return(
        <div className="footer">
            <div className="footBtns">
                <p>Home</p>
                <p>Games</p>
                <p>FAQ</p>
                <p>About Us</p>
                <p>Login</p>
                <p>Sign Up</p>
            </div>
            <div className="footImg">
                <h4>Nøkler Social Media</h4>
                <img alt="facebookicon" src={facebookLogo}/>
                <img alt="facebookicon" src={igLogo}/>
                <img alt="facebookicon" src={linkedinLogo}/>
                <img alt="facebookicon" src={twitchLogo}/>
                <img alt="facebookicon" src={ytLogo}/>
                <img alt="facebookicon" src={noklerLogo}/>
            </div>
        </div>
    )
}