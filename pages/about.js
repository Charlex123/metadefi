import Head from 'next/head'
import React, { useState, useEffect } from "react";
import {useRouter} from "next/router";
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";


const About = () => {
return ( 
    <div className={styles.container}>
      <section class="about section-padding" id="about">
        <div class="container-fluid">
            <div class="container">
                <div class="heading text-center">
                    <div class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                        <h6 class="sub-title">About</h6>
                        <h2 class="title">What is MTD?</h2>
                    </div>

                    <p class="content-desc animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">MTD is a new generation of Blockchain platform using the multilayered O-DPoS consensus algorithm,<br class="d-none d-xl-block"/> ability to quickly process transactions at near zero cost.</p>
                </div>
                <div class="content-area">
                    <div class="row">
                        <div class="col-md-12 col-lg-6 animated" data-animation="fadeInLeftShorter" data-animation-delay="0.5s">
                            <h4 class="title">Multilayer Master Node</h4>
                            <p>O-DPoS (Open - Delegated Proof of Stake) is composed of multiple clusters of hierarchized master nodes with a central master node cluster consisting of 21 master nodes and unlimited secondary master node clusters. Thus creating a possibility of infinite expansion.</p>
                            <h4 class="title">Analytical Stream Processing</h4>
                            <p>The transactions were analyzed for each different master node to be processed at the same time. Then the common data after a fixed time is a template to help the general system to avoid being loaded when processing large volumes of transactions. </p>
                            <h4 class="title">EVM-compatible</h4>
                            <p>MTD is built with EVM compatibility, so it will support all Dapps operating on Ethereum with faster transaction processing time and nearly zero cost.Furthermore, MTD also enables multi-chain interoperability, which makes it easier to scale Dapps. </p>
                        </div>
                        <div class="col-md-12 col-lg-6 animated" data-animation="fadeInRightShorter" data-animation-delay="0.5s">
                            <div class="position-relative what-is-crypto-img float-xl-right">
                                <img class="img-fluid" src="theme-assets/images/what-is-crypto.png" alt="Master Node"/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="about-us">
            <div class="container-fluid section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-12">
                            <h3 class="title-border page-desc-title">Technology<br class="d-none d-xl-block"/> for a better world</h3>
                            <p>OZC wishes to bring a green Blockchain platform, protect the environment, minimize the waste of resources and futile energy.</p>
                            <p>At the same time, the MTD Blockchain platform solution also meets the high demand for transaction processing to be able to apply Blockchain in all areas of life.</p>
                        </div>
                        <div class="col-lg-4 col-md-12 text-center my-4">
                            <img src="theme-assets/images/ozc-smartchain.png" alt="Our Coin" class="img-fluid"/>
                        </div>
                        <div class="col-lg-4 col-md-12">
                            <h3 class="title-border page-desc-title">Creating value <br class="d-none d-xl-block"/>for everyone</h3>
                            <p>Based on a fair distribution model, limit the waste of energy and equipment such as other Blockchain platforms, MTD hopes to create a fair and decentralised ecosystem where everyone can benefit from the best, even if they are not technophiles.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
 );
}

export default About;
