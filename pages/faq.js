import Head from 'next/head'
import React, { useState, useEffect } from "react";
import {useRouter} from "next/router";
import styles from '../styles/Home.module.css';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
return ( 
    <div className={styles.container}>
      <section id="faq" class="faq section-padding bg-gradient" data-midnight="white">
        <div class="container-fluid">
            <div class="container">
                <div class="dark-bg-heading text-center">
                    <div class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                        <h6 class="sub-title">question</h6>
                        <h2 class="title">FAQ</h2>
                    </div>

                    <p class="content-desc animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Below are frequently asked questions and official answers  <br class="d-none d-xl-block"/> from MTD that make it easy for anyone to find information.</p>
                </div>
                <Accordion class="accordion border-0" defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header class="accordionheader text-bold text-white">What is MTD?</Accordion.Header>
                        <Accordion.Body class="accordionbody">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header class="accordionheader text-bold text-white">How do you Stake?</Accordion.Header>
                        <Accordion.Body class="accordionbody">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>

            </div>
        </div>
    </section>
    </div>
 );
}

export default Faq;
