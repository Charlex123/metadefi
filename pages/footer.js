import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from "react";
import {useRouter} from "next/router";
import styles from '../styles/Home.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../node_modules/jquery/dist/jquery.js";
import WalletConnectClient from "@walletconnect/client";
import Web3 from "web3";
import MetadeficontractAbi from '../build/contracts/MetaDefi.json';
import MetadefisalecontractAbi from '../build/contracts/MetaDefiSale.json';
import StakecontractAbi from '../build/contracts/Stake.json';
import WalletConnectProvider from "@walletconnect/web3-provider";

const Header = () => {

    async function walletConnect() {
        //  Create WalletConnect Provider
          const provider = new WalletConnectProvider({
              infuraId: "8909fc4e39824c8b938df14a2e2a27b1",
          });
          
          //  Enable session (triggers QR Code modal)
          await provider.enable();
  
          const web3 = new Web3(provider);
      }
      
  
        async function connectMetamask() {
          if (window.ethereum) {
              //         window.ethereum; 
                      window.web3 = new Web3(web3.currentProvider);
             const showAddress = document.getElementById("connectedadddress");
              // try {
              // Request account access
              let accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
              showAddress.innerHTML = "Your connected wallet address" + accounts[0];
              // } catch (error) {
              // // User denied account access...
              // console.error("User denied account access")
              // }
              
              const MetadeficontractAddress = "0x9A2C37526ef17515709a6F93c57F4551D3E4339f";
              const MetadefisalecontractAddress = "0x470BC16DD7cc76a8c90fFCBc95a127297aa5C599";
              const StakecontractAddress = "0xE75A543582d0808d4DFc4478325d6f0c80f0d699";
  
              const MetaDefiInstance = await new web3.eth.Contract(MetadeficontractAbi.abi, MetadeficontractAddress);
              const MetaDefiSaleInstance = await new web3.eth.Contract(MetadefisalecontractAbi.abi, MetadefisalecontractAddress);
              const StakeInstance = await new web3.eth.Contract(StakecontractAbi.abi, StakecontractAddress);
  
              const senderAddress = accounts[0];
          //     MetaDefiSaleInstance.methods.buyTokens(20000000000).send({from: accounts[0]},function (err, res) {
          //     if (err) {
          //         console.log("An error occured", err)
          //         return
          //     }
          //     console.log("Token Buy: ", res)
          // })
              MetaDefiInstance.methods.balanceOf(MetadeficontractAddress).call(function (err, res) {
                  if (err) {
                      console.log("An error occured", err)
                      return
                  }
              console.log("The balance is: ", res)
              })
              // MetaDefiInstance.methods.approve(MetadeficontractAddress, 40000000000000).send({from: accounts[0]},function (err, res) {
              // if (err) {
              //     console.log("An error occured", err)
              //     return
              // }
              // console.log("Hash of the transaction: " + res)
              // })
              MetaDefiInstance.methods.transfer(MetadeficontractAddress,200000000000).send({from: MetadeficontractAddress}, function (err, res) {
                  if (err) {
                      console.log("An error occured", err)
                      return
                  }
                  console.log("Transfer is : " + res)
              })
              MetaDefiInstance.methods.allowance(accounts[0],MetadeficontractAddress).call(function (err, res) {
                  if (err) {
                      console.log("An error occured", err)
                      return
                  }
                  console.log("Allowance is : " + res)
                  })
              MetaDefiInstance.methods.transferFrom(accounts[0],MetadeficontractAddress, 300000).send({from: MetadeficontractAddress},function (err, res) {
              if (err) {
                  console.log("An error occured", err)
                  return
              }
              console.log("Hash of the transaction: " + res)
              })
          }
      }


return ( 
    <div className={styles.container}>
      <header className="topfixedheader">
      <nav class="nav main-menu static-top navbar-dark navbar navbar-expand-lg bg fixed-top mb-1">
          <div class="container">
            <a class="navbar-brand animated" data-animation="fadeInDown" data-animation-delay="1s" href="#head-area"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div id="navigation" class="navbar-nav ml-auto">
                    <ul class="navbar-nav mt-1">
                        <li class="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.1s">
                            <Link href="/nftmarketplace" ><a class="nav-link">NFT MarketPlace</a></Link>
                        </li>
                        <li class="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.2s">
                            <Link href="../#buyMTD"><a class="nav-link">Buy MTD Token</a></Link>
                        </li>
                        <li class="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.4s">
                            <Link href="../#stakeMTD"><a class="nav-link">Stake MTD Token</a></Link>
                        </li>
                        <li class="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.5s">
                            <Link href="../#roadmap"><a class="nav-link">Roadmap</a></Link>
                        </li>
                        <li class="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.5s">
                            <Link href="#team"><a class="nav-link">Team</a></Link>
                        </li>
                        <li class="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.5s">
                            <Link href="/about"><a class="nav-link">About</a></Link>
                        </li>
                        <li class="nav-item animated" data-animation="fadeInDown" data-animation-delay="1.5s">
                            <Link href="/faq"><a class="nav-link">FAQ</a></Link>
                        </li>
                        <div class="group relative">
                            <button class="walletconnectbtn">Connect Wallet</button>
                            <nav tabindex="0" class="ddown">
                                <ul class="py-1">
                                    <li>
                                        <button onClick={connectMetamask} class="btn">
                                            <img src="theme-assets/images/metamasklogo.svg" class="mlogo" alt="CICO"/>Connect Using MetaMask
                                        </button>
                                        
                                    </li>
                                    <li>
                                        <button onClick={walletConnect} class="btn">
                                            <img src="theme-assets/images/WalletConnectlogo.png" class="mlogo" alt="CICO"/>Connect Using WalletConnect
                                        </button>
                                    </li>
                                    <span id="connectedadddress"></span>
                                </ul>
                            </nav>
                        </div>
                    </ul>
                    <span id="slide-line"></span>
                    
                </div>
            </div>
        </div>
    </nav>

    <Navbar collapseOnSelect class="Navbarcss" fixed="top" expand="lg">
        <Container>
        <Navbar.Brand href="#home"><img src="theme-assets/images/Metadefiwhite.png" width="130px" alt="OZC logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <Nav.Link href="/nftmarketplace"><a class="nav-link">NFT MarketPlace</a></Nav.Link>
                <Nav.Link href="../#buyMTD"><a class="nav-link">Buy MTD Token</a></Nav.Link>
                <Nav.Link href="../#stakeMTD"><a class="nav-link">Stake MTD Token</a></Nav.Link>
                <Nav.Link href="../#roadmap"><a class="nav-link">Roadmap</a></Nav.Link>
                <Nav.Link href="../#team"><a class="nav-link">Team</a></Nav.Link>
                <Nav.Link href="/about"><a class="nav-link">About</a></Nav.Link>
                <Nav.Link href="/faq"><a class="nav-link">Faq</a></Nav.Link>
                <Nav.Link href="#memes">
                    <div class="group relative">
                        <button class="walletconnectbtn">Connect Wallet</button>
                        <nav tabindex="0" class="ddown">
                            <ul class="py-1">
                                <li>
                                    <button onClick={connectMetamask} class="btn">
                                        <img src="theme-assets/images/metamasklogo.svg" class="mlogo" alt="CICO"/>Connect Using MetaMask
                                    </button>
                                    
                                </li>
                                <li>
                                    <button onClick={walletConnect} class="btn">
                                        <img src="theme-assets/images/WalletConnectlogo.png" class="mlogo" alt="CICO"/>Connect Using WalletConnect
                                    </button>
                                </li>
                                <span id="connectedadddress"></span>
                            </ul>
                        </nav>
                    </div>    
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>

        </header>
    </div>
 );
}

export default Header;
