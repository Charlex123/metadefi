import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from "react";
import {useRouter} from "next/router";
import styles from '../styles/Home.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
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
          
        <Navbar collapseOnSelect className="Navbarcss" fixed="top" expand="lg" variant="dark">
            <Container className="">
            <Navbar.Brand href="../"><img src="theme-assets/images/Metadefiwhite.png" width="130px" alt="OZC logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/nftmarketplace" className="nav-link text-white">NFT MarketPlace</Nav.Link>
                    <Nav.Link href="../#buyMTD" className="nav-link text-white">Buy MTD Token</Nav.Link>
                    <Nav.Link href="../#stakeMTD" className="nav-link text-white">Stake MTD Token</Nav.Link>
                    <Nav.Link href="../#roadmap" className="nav-link text-white">Roadmap</Nav.Link>
                    <Nav.Link href="../#team" className="nav-link text-white">Team</Nav.Link>
                    <Nav.Link href="/about" className="nav-link text-white">About</Nav.Link>
                    <Nav.Link href="/faq" className="nav-link text-white">Faq</Nav.Link>
                    <NavDropdown title="Connect Wallet" class="text-info text-bold mx-auto" id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={connectMetamask} class="unstyled w100 text-nowrap walletconnectbtn text-warning ml-2">
                            <img src="theme-assets/images/metamasklogo.svg" class="mlogo" alt="CICO"/>Connect Using MetaMask
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={walletConnect} class="unstyled w1100 text-nowrap walletconnectbtn text-warning ml-2">
                            <img src="theme-assets/images/WalletConnectlogo.png" class="mlogo" alt="CICO"/>Connect Using WalletConnect
                        </NavDropdown.Item>
                        <span id="connectedadddress"></span>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    </div>
 );
}

export default Header;
