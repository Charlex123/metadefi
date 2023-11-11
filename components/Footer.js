import Head from 'next/head'
import React, { useState, useEffect } from "react";
import {useRouter} from "next/router";
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
return ( 
    <div className={styles.container}>
      <footer class="footer static-bottom  footer-custom-class" data-midnight="white">
        <div class="footer-bg-image"></div>
            <div class="footer-wrapper">
                <div class="row">
                    <div class="col-md-4">
                        <div class="about">
                            <div class="title animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">
                                <img src="theme-assets/images/Metadefiwhite.png" width="130px"alt="OZC Logo"/>
                            </div>
                            <div class="about-text animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                                <p class="grey-accent2">MTD is a new generation of Blockchain platform using the multilayered O-DPoS consensus algorithm, ability to quickly process transactions at near zero cost</p>
                            </div>
                            <ul class="social-buttons list-unstyled mb-5">
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="links">
                            <h5 class="title animated Nunito" data-animation="fadeInUpShorter" data-animation-delay="0.5s">Useful Links</h5>
                            <ul class="useful-links float-left mr-5">
                                <li class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.6s"><a href="index-2.html#about">What is MTD?</a></li>
                                <li class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.7s"><a href="index-2.html#solution">Solutions</a></li>
                                <li class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.8s"><a href="https://whitepaper.ozc.org/">Whitepaper</a></li>
                            </ul>
                            <ul class="useful-links">
                                <li class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.9s"><a href="#roadmap">Roadmap</a></li>
                                <li class="animated" data-animation="fadeInUpShorter" data-animation-delay="1.0s"><a href="#team">Team</a></li>
                                <li class="animated" data-animation="fadeInUpShorter" data-animation-delay="1.1s"><a href="#faq">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="feed">
                            <h5 class="title animated Nunito" data-animation="fadeInUpShorter" data-animation-delay="0.8s">Contact Information</h5>
                            <div class="tweets">
                                <span class="animated" data-animation="fadeInUpShorter" data-animation-delay="1.0s">Email: <a href="cdn-cgi/l/email-protection.html" class="__cf_email__" data-cfemail="5831363e371837223b76372a3f">[email&#160;protected]</a></span>
                                <span class="animated" data-animation="fadeInUpShorter" data-animation-delay="1.2s">Telegram Group: <a href="https://t.me/OZC_Smart_Chain_Group" target="_blank">https://t.me/OZC_Smart_Chain_Group</a></span>
                                <span class="animated" data-animation="fadeInUpShorter" data-animation-delay="1.2s">Telegram Chanel: <a href="https://t.me/OZC_Smart_Chain_Chanel" target="_blank">https://t.me/OZC_Smart_Chain_Chanel</a> </span>

                            </div>
                        </div>
                    </div>
                    <div class="copy-right mx-auto text-center">
                        <span class="copyright">Copyright &copy; 2021, MTD Foundation.</span>
                    </div>
                </div>
            </div>
        </footer>
    </div>
 );
}

export default Footer;
