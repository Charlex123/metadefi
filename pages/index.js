import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from "react";
import {useRouter} from "next/router";
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import WalletConnectClient from "@walletconnect/client";
import Web3 from "web3";
import MetadeficontractAbi from '../build/contracts/MetaDefi.json';
import MetadefisalecontractAbi from '../build/contracts/MetaDefiSale.json';
import StakecontractAbi from '../build/contracts/Stake.json';
import WalletConnectProvider from "@walletconnect/web3-provider";


library.add(faUser, faClock, faFacebook, faTwitter);


    
export default function Home() {
    const RESET_INTERVAL_S = 300; // 300s = 5m * 60s/m

    const formatTime = (time) =>
    `${String(Math.floor(time / 60)).padStart(2, "0")}:${String(
      time % 60
    ).padStart(2, "0")}`;

const Timer = ({ time }) => {
  const timeRemain = RESET_INTERVAL_S - (time % RESET_INTERVAL_S);
  return (
    <>
      <div>{formatTime(timeRemain)}</div>
    </>
  );
};
const IntervalTimerFunctional = () => {
    const [time, setTime] = useState(0);
  
    useEffect(() => {
      const timerId = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
      return () => clearInterval(timerId);
    }, []);
  
    return <Timer time={time} />;
  };
    // const [seconds, setSeconds] = useState(0)
    // const [minutes, setMinutes] = useState(5)



    // function updateTime() {
    //     if (minutes == 0 && seconds == 0) {
    //     //reset
    //     setSeconds(0);
    //     setMinutes(5);
    //     }
    //     else {
    //     if (seconds == 0) {
    //         setMinutes(minutes => minutes - 1);
    //         setSeconds(59);
    //     } else {
    //         setSeconds(seconds => seconds - 1);
    //     }
    //     }
    // }
    // useEffect(() => {
    //     // use set timeout and be confident because updateTime will cause rerender
    //     // rerender mean re call this effect => then it will be similar to how setinterval works
    //     // but with easy to understand logic
    //     const token = setInterval(updateTime, 1000)

    //     return function cleanUp() {
    //     clearInterval(token);
    //     }
    // }, []);

    const [randomPrice, setrandomPrice] = useState(0)
    
    const generaterandomPrice = () => {
        const priceArray = document.querySelectorAll(".nftprice")
        const randomPrice = Math.floor(Math.random() * priceArray.length);
        setrandomPrice(randomPrice)
    }

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
      
        {/* Main Homepage Section */}
        <div class="content-wrapper">
            <div class="content-body">
        <main>
        <section class="head-area fontNunito" id="head-area" data-midnight="white">
                        <div id="particles-js"></div>
                        <div class="head-content fontNunito container-fluid d-flex align-items-center">
                            <div class="container">
                            <div class="head-bg-image"></div>
                                <div class="banner-wrapper">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6 col-md-12">
                                            <div class="banner-content pt-5">
                                                <h1 class="animated" data-animation="fadeInUpShorter" data-animation-delay="1.5s"><h1 class="head1">MetaDefi - BlockChain Staking ProtocolFirst Decentralized</h1> <div class="heada">Staking Protocol on Blockchain</div></h1>
                                                <h3 class="mb-4 d-block head2 text-yellow-600" data-animation="fadeInUpShorter" data-animation-delay="1.6s">A Metaverse Blockchain Project</h3>
                                                <div class="mt-5">
                                                    <a href="#buyMTD" class="btnbuy" data-animation="fadeInUpShorter" data-animation-delay="1.7s">Buy MTD Token</a>
                                                    <a href="#stakeMTD" class="btnstake" data-animation="fadeInUpShorter" data-animation-delay="1.8s">Stake MTD Token</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-12 move-first">
                                            <div class="crypto-3d-graphic animated" data-animation="fadeInUpShorter" data-animation-delay="1.7s">
                                                <img src="theme-assets/images/banner-graphic.png" class="graphic-3d-img mx-auto d-block" alt="CICO"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="buyforms" id="buyMTD">
                        <h1 class="headerbuy1">Buy MTD Now</h1>
                        <div class="buyformcon">
                            <div class="max-w-xs text-center">
                                <form class="buyforma">
                                    <div class="buyformflex">
                                        <div class="w-full mb-4">
                                        <label class="buylabel" for="amount">
                                            Amount
                                        </label>
                                        <input class="buyforminput" id="buyamount" type="text" placeholder="buy amount"/>
                                        </div>
                                        <div class="w-full">
                                            <button class="btnbuy2" >Buy MTD Token</button>
                                        </div>
                                    </div>

                                    <div class="buyformflex">
                                        <div class="flexonebuy mb-4">
                                            <div class="buylabel mtb">MTD Tokens Bought</div>
                                            <div class="mtb mtd_tokens_bought">0.0000MTD</div>
                                        </div>
                                    </div>

                                    {/* <div class="buynote">(*Note: You earn 2% Daily For 180 Days)</div> */}
                                </form>
                            </div>
                        </div>
                    </section>
                    <section class="stakeforms" id="stakeMTD">
                        <div class="stake-bg-image"></div>
                        <h1 class="header1">Stake MTD Now</h1>
                        <div class="gridcol">
                            <div class="formcon">
                                <div class="max-w-xs text-center">
                                    <form class="forma">
                                        <h3 class="header3">META BLUE</h3>
                                        <div class="stakeformflex">
                                            <div class="flexone mb-4 has-tooltip">
                                            <label class="stakelabel" for="amount">
                                                Stake Amount
                                            </label>
                                            <input class="stakeforminput" id="stakeamount" type="text" placeholder="1000000"/>
                                            </div>
                                            <div class="flexone mb-6 has-tooltip">
                                            <span class='tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-8'>Some Nice Tooltip Text</span>
                                            <label class="stakelabel" for="password">
                                                7 Days (Duration)
                                            </label>
                                            <input class="stakeforminput" id="password" type="number" value="7" placeholder="7 Days"/>
                                            </div>
                                        </div>

                                        <div class="stakeformflex">
                                            <div class="flexone mb-4">
                                                <label class="stakelabel" for="username">
                                                    Current Stake Reward
                                                </label>
                                                <div class="current_stake_reward">0.0000MTD</div>
                                            </div>
                                            <div class="flexone mb-6">
                                                <label class="stakelabel" for="username">
                                                    Total Stake Reward
                                                </label>
                                                <div class="total_stake_reward">0.0000MTD</div>
                                            </div>
                                        </div>

                                        <div class="w-full mb-6">
                                            <button class="stakebtn2 border-0" >Stake MTD Token</button>
                                        </div>

                                        <div class="stakenote">(*Note: You earn 1.5% Daily For 7 Days)</div>
                                    </form>
                                </div>
                            </div>

                            <div class="formcon">
                                <div class="max-w-xs text-center">
                                    <form class="forma">
                                        <h3 class="header3">META YELLOW</h3>
                                        <div class="stakeformflex">
                                            <div class="flexone mb-4 has-tooltip">
                                            <label class="stakelabel" for="amount">
                                                Stake Amount
                                            </label>
                                            <input class="stakeforminput" id="stakeamount" type="text" placeholder="1000000"/>
                                            </div>
                                            <div class="flexone mb-6 has-tooltip">
                                            <span class='tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-8'>Some Nice Tooltip Text</span>
                                            <label class="stakelabel" for="password">
                                                20 Days (Duration)
                                            </label>
                                            <input class="stakeforminput" id="password" type="number" value="20" placeholder="20 Days"/>
                                            </div>
                                        </div>

                                        <div class="stakeformflex">
                                            <div class="flexone mb-4">
                                                <label class="stakelabel" for="username">
                                                    Current Stake Reward
                                                </label>
                                                <div class="current_stake_reward">0.0000MTD</div>
                                            </div>
                                            <div class="flexone mb-6">
                                                <label class="stakelabel" for="username">
                                                    Total Stake Reward
                                                </label>
                                                <div class="total_stake_reward">0.0000MTD</div>
                                            </div>
                                        </div>

                                        <div class="w-full mb-6">
                                            <button class="stakebtn2" >Stake MTD Token</button>
                                        </div>

                                        <div class="stakenote">(*Note: You earn 1.6% Daily For 20 Days)</div>
                                    </form>
                                </div>
                            </div>

                            <div class="formcon">
                                <div class="max-w-xs text-center">
                                    <form class="forma">
                                        <h3 class="header3">META GRAY</h3>
                                        <div class="stakeformflex">
                                            <div class="flexone mb-4 has-tooltip">
                                            <label class="stakelabel" for="amount">
                                                Stake Amount
                                            </label>
                                            <input class="stakeforminput" id="stakeamount" type="text" placeholder="1000000"/>
                                            </div>
                                            <div class="flexone mb-6 has-tooltip">
                                            <span class='tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-8'>Some Nice Tooltip Text</span>
                                            <label class="stakelabel" for="password">
                                                30 Days (Duration)
                                            </label>
                                            <input class="stakeforminput" id="password" type="number" value="30" placeholder="30 Dyas"/>
                                            </div>
                                        </div>

                                        <div class="stakeformflex">
                                            <div class="flexone mb-4">
                                                <label class="stakelabel" for="username">
                                                    Current Stake Reward
                                                </label>
                                                <div class="current_stake_reward">0.0000MTD</div>
                                            </div>
                                            <div class="flexone mb-6">
                                                <label class="stakelabel" for="username">
                                                    Total Stake Reward
                                                </label>
                                                <div class="total_stake_reward">0.0000MTD</div>
                                            </div>
                                        </div>

                                        <div class="w-full mb-6">
                                            <button class="stakebtn2" >Stake MTD Token</button>
                                        </div>

                                        <div class="stakenote">(*Note: You earn 1.7% Daily For 30 Days)</div>
                                    </form>
                                </div>
                            </div>

                            <div class="formcon">
                                <div class="max-w-xs text-center">
                                    <form class="forma">
                                        <h3 class="header3">META WHITE</h3>
                                        <div class="stakeformflex">
                                            <div class="flexone mb-4 has-tooltip">
                                            <label class="stakelabel" for="amount">
                                                Stake Amount
                                            </label>
                                            <input class="stakeforminput" id="stakeamount" type="text" placeholder="1000000"/>
                                            </div>
                                            <div class="flexone mb-6 has-tooltip">
                                            <span class='tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-8'>Some Nice Tooltip Text</span>
                                            <label class="stakelabel" for="password">
                                                3 Months (Duration)
                                            </label>
                                            <input class="stakeforminput" id="password" type="number" value="90" placeholder="90 Days"/>
                                            </div>
                                        </div>

                                        <div class="stakeformflex">
                                            <div class="flexone mb-4">
                                                <label class="stakelabel" for="username">
                                                    Current Stake Reward
                                                </label>
                                                <div class="current_stake_reward">0.0000MTD</div>
                                            </div>
                                            <div class="flexone mb-6">
                                                <label class="stakelabel" for="username">
                                                    Total Stake Reward
                                                </label>
                                                <div class="total_stake_reward">0.0000MTD</div>
                                            </div>
                                        </div>

                                        <div class="w-full mb-6">
                                            <button class="stakebtn2" >Stake MTD Token</button>
                                        </div>

                                        <div class="stakenote">(*Note: You earn 1.8% Daily For 90 Days)</div>
                                    </form>
                                </div>
                            </div>

                            <div class="formcon">
                                <div class="max-w-xs text-center">
                                    <form class="forma">
                                        <h3 class="header3">META GREEN</h3>
                                        <div class="stakeformflex">
                                            <div class="flexone mb-4 has-tooltip">
                                            <label class="stakelabel" for="amount">
                                                Stake Amount
                                            </label>
                                            <input class="stakeforminput" id="stakeamount" type="text" placeholder="1000000"/>
                                            </div>
                                            <div class="flexone mb-6 has-tooltip">
                                            <span class='tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-8'>Some Nice Tooltip Text</span>
                                            <label class="stakelabel" for="password">
                                                6 Months (Duration)
                                            </label>
                                            <input class="stakeforminput" id="password" type="number" value="180" placeholder="180 Days"/>
                                            </div>
                                        </div>

                                        <div class="stakeformflex">
                                            <div class="flexone mb-4">
                                                <label class="stakelabel" for="username">
                                                    Current Stake Reward
                                                </label>
                                                <div class="current_stake_reward">0.0000MTD</div>
                                            </div>
                                            <div class="flexone mb-6">
                                                <label class="stakelabel" for="username">
                                                    Total Stake Reward
                                                </label>
                                                <div class="total_stake_reward">0.0000MTD</div>
                                            </div>
                                        </div>

                                        <div class="w-full mb-6">
                                            <button class="stakebtn2" >Stake MTD Token</button>
                                        </div>

                                        <div class="stakenote">(*Note: You earn 2% Daily For 180 Days)</div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="nftmarketshow ">
                        <h1 class="headernft">OUR NFT MARKET PLACE</h1>
                        <div class="nftgridcol1">
                            <div class="ntfcon mt-2 mb-2">
                                <img class="img-fluid nft-image" src="theme-assets/images/cartoon_nft.png" alt="Master Node"/>
                                <div class="max-w-xs text-center">
                                    <form class="">
                                        <div class="buyformflex">
                                            <div class="flexa mb-4">
                                                <div class="nftprice" id="nft_price">$2,500</div>
                                                <div class="countdown_timer">
                                                    <div class="timer_clock">
                                                        <FontAwesomeIcon icon="clock" color="white" class="fa_timer"/>
                                                    </div>
                                                <div class="countdown_dur" id="timer-countdown"><IntervalTimerFunctional /></div>
                                            </div>
                                            </div>
                                            
                                            <div class="w-full mb-6 has-tooltip">
                                                <button class="nftbtn" data-animation="fadeInUpShorter" onClick = {generaterandomPrice}  data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right" data-animation-delay="1.8s">BUY NFT</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div class="ntfcon mt-2 mb-2">
                                <img class="img-fluid nft-image" src="theme-assets/images/cartoon_nft.png" alt="Master Node"/>
                                <div class="max-w-xs text-center">
                                    <form class="">
                                        <div class="buyformflex">
                                            <div class="flexa mb-4">
                                                <div class="nftprice" id="nft_price">$2,500</div>
                                                <div class="countdown_timer">
                                                    <div class="timer_clock">
                                                        <FontAwesomeIcon icon="clock" color="white" class="fa_timer"/>
                                                    </div>
                                                    <div class="countdown_dur" id="timer-countdown"><IntervalTimerFunctional /></div>
                                            </div>
                                            </div>
                                            
                                            <div class="w-full mb-6 has-tooltip">
                                                <button class="nftbtn" data-animation="fadeInUpShorter" onClick = {generaterandomPrice}  data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right" data-animation-delay="1.8s">BUY NFT</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div class="ntfcon  mt-2 mb-2">
                                <img class="img-fluid nft-image" src="theme-assets/images/cartoon_nft.png" alt="Master Node"/>
                                <div class="max-w-xs text-center">
                                    <form class="">
                                        <div class="buyformflex">
                                            <div class="flexa mb-4">
                                                <div class="nftprice" id="nft_price">$2,500</div>
                                                <div class="countdown_timer">
                                                    <div class="timer_clock">
                                                        <FontAwesomeIcon icon="clock" color="white" class="fa_timer"/>
                                                    </div>
                                                <div class="countdown_dur" id="timer-countdown"><IntervalTimerFunctional /></div>
                                            </div>
                                            </div>
                                            
                                            <div class="w-full mb-6 has-tooltip">
                                                <button class="nftbtn" data-animation="fadeInUpShorter" onClick = {generaterandomPrice}  data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right" data-animation-delay="1.8s">BUY NFT</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div class="ntfcon mt-2 mb-2">
                                <img class="img-fluid nft-image" src="theme-assets/images/cartoon_nft.png" alt="Master Node"/>
                                <div class="max-w-xs text-center">
                                    <form class="">
                                        <div class="buyformflex">
                                            <div class="flexa mb-4">
                                                <div class="nftprice" id="nft_price">$2,500</div>
                                                <div class="countdown_timer">
                                                    <div class="timer_clock">
                                                        <FontAwesomeIcon icon="clock" color="white" class="fa_timer"/>
                                                    </div>
                                                <div class="countdown_dur" id="timer-countdown"><IntervalTimerFunctional /></div>
                                            </div>
                                            </div>
                                            
                                            <div class="w-full mb-6 has-tooltip">
                                                <button class="nftbtn" data-animation="fadeInUpShorter" onClick = {generaterandomPrice}  data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right" data-animation-delay="1.8s">BUY NFT</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="nftmarketbtn w-full justify-center mx-auto mb-6">
                            <a class="nftmarketlink" href="/nftmarketplace"  data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right" data-animation-delay="1.8s">Go To NFT Market Place</a>
                        </div>

                    </section>
                    
                    <section id="problem-solution" class="problem-solution section-pro section-padding " data-midnight="white">
                        <div class="bg-image-overlay"></div>
                        <div class="container-fluid">
                            <div class="container">
                                <div class="dark-bg-heading text-center">
                                    <div class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                                        <h6 class="sub-title Nunito">Solutions</h6>
                                        <h2 class="title font Nunito">Problem &amp; <strong>Solution</strong></h2>
                                    </div>

                                    <p class="content-desc animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Blockchain will definitely be an important technology to be widely applied in the future<br class="d-none d-xl-block"/> and bring great value to society. <br class="d-none d-xl-block"/>However, there are still many problems to be solved.<br class="d-none d-xl-block"/></p>
                                </div>
                                <div class="problems">
                                    <div class="row">
                                        <div class="col-md-12 col-lg-6">
                                            <div class="dark-bg-heading mb-4">
                                                <h4 class="title animated Nunito" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Problem</h4>
                                            </div>
                                            <p class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">The transaction processing speed is slow, the low processing volume, not suitable for applying in areas that require the ability to handle large and fast transaction volumes.</p>
                                            <p class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Due to the small transaction processing capability, the platforms are often congested and create auction races for transaction fees and unreasonably high transaction fees.</p>
                                            <p class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.6s">Consuming too many useless resources by the PoW consensus algorithm, creating many consequences in terms of affecting the living environment, increasing negative climate change.</p>
                                        </div>
                                        <div class="col-md-12 col-lg-6 text-center">
                                            <img src="theme-assets/images/problems-graphic.png" class="problems-img animated" data-animation="fadeInUpShorter" data-animation-delay="0.5s" alt="problems-graphic"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="solutions mt-5">
                                    <div class="row">
                                        <div class="col-md-12 col-lg-6 text-center">
                                            <img src="theme-assets/images/solutions-graphic.png" class="solutions-img animated" data-animation="fadeInUpShorter" data-animation-delay="0.5s" alt="problems-graphic"/>
                                        </div>
                                        <div class="col-md-12 col-lg-6 move-first">
                                            <div class="dark-bg-heading mb-4">
                                                <h4 class="title animated Nunito" data-animation="fadeInUpShorter" data-animation-delay="0.2s">Solution</h4>
                                            </div>
                                            <p class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.5s">O-DPoS (Open - Delegated Proof of Stake) consensus algorithm for unlimited transaction processing scalability in an average time of only 3 seconds.</p>

                                            <p class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.7s">The low almost zero transaction fees are made possible by the large transaction processing capacity and MTD native token allocation method that rewards long-running Master Node clusters</p>

                                            <p class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.7s">Saving energy and protecting the environment is one of the biggest goals of MTD as well as the greatest value of the O-DPoS consensus algorithm.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="roadmap" class="roadmap section-padding">
                        <div class="container-fluid">
                            <div class="container">
                                <div class="heading text-center">
                                    <div class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                                        <h6 class="sub-title Nunito">Implementation</h6>
                                        <h2 class="title Nunito">Roadmap</h2>
                                    </div>

                                    <p class="content-desc animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">The starting idea of O-DPoS consensus algorithm was started at the end of 2018 <br class="d-none d-xl-block"/> and MTD is gradually being perfected to be widely used.</p>
                                </div>
                                <div class="row animated" data-animation="fadeInUpShorter" data-animation-delay="0.6s">
                                    <div class="col-12">
                                        <div class="roadmap-container">
                                            <div class="swiper-container">
                                                <div class="swiper-wrapper timeline">
                                                    <div class="swiper-slide">
                                                        <div class="roadmap-info">
                                                            <div class="timestamp completed">
                                                                <span class="date">October 2018</span>
                                                            </div>
                                                            <div class="status completed">
                                                                <span>Start<br/>building ideas</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="roadmap-info">
                                                            <div class="timestamp completed">
                                                                <span class="date">February 2019</span>
                                                            </div>
                                                            <div class="status completed">
                                                                <span>Start a team &amp; <br/>build a project</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="roadmap-info">
                                                            <div class="timestamp completed">
                                                                <span class="date">April 2021</span>
                                                            </div>
                                                            <div class="status completed">
                                                                <span>Called Angel capital<br/>3 millions USD</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide active">
                                                        <div class="roadmap-info">
                                                            <div class="timestamp active">
                                                                <span class="date">July 2021</span>
                                                            </div>
                                                            <div class="status active">
                                                                <span>Open ICO & AirDrop</span>
                                                                <span class="live">Coming soon</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="roadmap-info">
                                                            <div class="timestamp remaining">
                                                                <span class="date">January 2022 </span>
                                                            </div>
                                                            <div class="status remaining">
                                                                <span>Testnet launched<br/>End ICO </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="roadmap-info">
                                                            <div class="timestamp remaining">
                                                                <span class="date">February 2022</span>
                                                            </div>
                                                            <div class="status remaining">
                                                                <span>MTD Distribution <br/>& Listing Exchange</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="roadmap-info">
                                                            <div class="timestamp remaining">
                                                                <span class="date">August 2022</span>
                                                            </div>
                                                            <div class="status remaining">
                                                                <span>Mainnet launched</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="roadmap-info">
                                                            <div class="timestamp remaining">
                                                                <span class="date">Next</span>
                                                            </div>
                                                            <div class="status remaining">
                                                                <span>Expand the development<br/> ecosystem Dapp </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-control">
                                                <span class="prev-slide"></span>
                                                <span class="next-slide"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="our-coin" class="our-coin section-pro section-padding " data-midnight="white">
                        <div class="bg-image-overlay"></div>
                        <div class="container-fluid">
                            <div class="container">
                                <div class="dark-bg-heading text-center">
                                    <div class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                                        <h6 class="sub-title Nunito">MTD</h6>
                                        <h2 class="title Nunito">MTD COIN</h2>
                                    </div>
                                    <p class="content-desc animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">MTD is the original coin of Blockchain platform MTD,<br class="d-none d-xl-block"/> it brings operating energy to the entire system and ecosystem.  </p>
                                </div>
                                <div class="row">
                                    <div class="col-lg-5 col-md-12 animated" data-animation="fadeInLeftShorter" data-animation-delay="0.6s">
                                        <div class="coin-img">
                                            <img class="img-fluid" src="theme-assets/images/OZC-Coin.png" alt="Coin Image"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-7 col-md-12 animated" data-animation="fadeInRightShorter" data-animation-delay="0.6s">
                                        <div class="dark-bg-heading mb-4">
                                            <h4 class="title Nunito">MTD - ORIGINAL TOKEN</h4>
                                        </div>
                                        <p>To operate the MTD Blockchain platform, we have created an original coin called MTD to pay transaction fees and reward the activities of Master Node.</p>
                                        <p><span>Total supply: </span> <strong class="white">200.000.000 MTD</strong></p>
                                        <p><span>Symbol:</span> <strong class="white">MTD</strong></p>
                                        <p><span>Decimal number:</span> <strong class="white">6</strong></p>
                                        <p><span>Token type:</span> <strong class="white">Original Token</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="token-distribution" class="token-distribution section-padding">
                        <div class="container-fluid">
                            <div class="container">
                                <div class="heading text-center">
                                    <div class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                                        <h6 class="sub-title Nunito">Token stats</h6>
                                        <h2 class="title Nunito">MTD ALLOCATION</h2>
                                    </div>

                                    <p class="content-desc animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s">Allocation of MTD is also a strategy to help MTD achieve its goal <br class="d-none d-xl-block"/> of decentralization and create a community that loves and builds a sustainable ecosystem. </p>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 col-lg-6 pr-5 animated" data-animation="fadeInLeftShorter" data-animation-delay="0.6s">
                                        <div class="content-area Nunito">
                                            <h4 class="Nunito">Detailed Allocation</h4>
                                            <p class="mt-1">65% of MTD will be distributed to the community through the AirDrop program and ICO combined with the goal of creating a community of more than 2,000,000 users who hold MTD.</p>

                                            <p>20% of MTD is allocated to the bonus fund for Master Node clusters within the first 5 years before transaction fees are sufficient to maintain and become profitable. </p>

                                            <p>7% of MTD is used to donate to experts and advisors involved in operating and developing the platform. This amount of MTD is locked and distributed every 3 months for 5 years </p>

                                            <p>8% of MTD is used to reward the team that founded, developed and operated the platform. This amount of MTD is locked and distributed every 3 months for 5 years  </p>


                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-6 move-first animated" data-animation="fadeInRightShorter" data-animation-delay="0.6s">
                                        <div class="token-img">
                                            <img class="img-fluid" src="theme-assets/images/chart.png" alt="token-distribution"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div id="team" class="advisor team section-paddin">
                        <div class="">
                            <div class="">
                                <div class="heading text-center">
                                    <div class="animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                                        <h6 class="sub-title Nunito">TEAM</h6>
                                        <h2 class="title Nunito">TEAM</h2>
                                    </div>

                                    <p class="content-desc animated" data-animation="fadeInUpShorter" data-animation-delay="0.4s"> 
                                        MTD Smart Chain was built by a team of enthusiastic founders from many countries around the world. 
                                        With the goal of building a completely decentralized Blockchain platform and not depending on any one individual, the founding team is completely anonymous. 
                                        When officially starting operations from February 2022, MTD Smart Chain will operate with 21 CEOs elected by MTD Coin holders. 
                                        Anyone who owns MTD Coin and is supported by the community can coordinate the MTD Smart Chain.
                                    </p>
                                </div>
                                
                                <div class="teamgridcol">
                                    
                                    <div class="teamcon">
                                        <img class="w-full teampic" src="theme-assets/images/mypics.jpg" alt="Sunset in the mountains" />
                                        <div class="team_member_title">Head Developer</div>
                                        <div class="teampost">
                                            <div class="team_socials"> 
                                                <div class="team_social_icons"><Link href="https://facebook.com/charlesmuoka"><a><FontAwesomeIcon icon={['fab', 'facebook']} color="#000057"/></a></Link></div>
                                                <div class="team_social_icons"><Link href="https://twitter.com/charlesmuoka"><a><FontAwesomeIcon icon={['fab', 'twitter']} color="#068979"/></a></Link></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="teamcon">
                                        <img class="w-full teampic" src="theme-assets/images/mypics.jpg" alt="Sunset in the mountains" />
                                        <div class="team_member_title">Head Developer</div>
                                        <div class="teampost">
                                            <div class="team_socials"> 
                                                <div class="team_social_icons"><Link href="https://facebook.com/charlesmuoka"><a><FontAwesomeIcon icon={['fab', 'facebook']} color="#000057"/></a></Link></div>
                                                <div class="team_social_icons"><Link href="https://twitter.com/charlesmuoka"><a><FontAwesomeIcon icon={['fab', 'twitter']} color="#068979"/></a></Link></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="teamcon">
                                        <img class="w-full teampic" src="theme-assets/images/mypics.jpg" alt="Sunset in the mountains" />
                                        <div class="team_member_title">Head Developer</div>
                                        <div class="teampost">
                                            <div class="team_socials"> 
                                                <div class="team_social_icons"><Link href="https://facebook.com/charlesmuoka"><a><FontAwesomeIcon icon={['fab', 'facebook']} color="#000057"/></a></Link></div>
                                                <div class="team_social_icons"><Link href="https://twitter.com/charlesmuoka"><a><FontAwesomeIcon icon={['fab', 'twitter']} color="#068979"/></a></Link></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="teamcon">
                                        <img class="w-full teampic" src="theme-assets/images/mypics.jpg" alt="Sunset in the mountains" />
                                        <div class="team_member_title">Head Developer</div>
                                        <div class="teampost">
                                            <div class="team_socials"> 
                                                <div class="team_social_icons"><Link href="https://facebook.com/charlesmuoka"><a><FontAwesomeIcon icon={['fab', 'facebook']} color="#000057"/></a></Link></div>
                                                <div class="team_social_icons"><Link href="https://twitter.com/charlesmuoka"><a><FontAwesomeIcon icon={['fab', 'twitter']} color="#068979"/></a></Link></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="teamcon">
                                        <img class="w-full teampic" src="theme-assets/images/mypics.jpg" alt="Sunset in the mountains" />
                                        <div class="team_member_title">Head Developer</div>
                                        <div class="teampost">
                                            <div class="team_socials"> 
                                                <div class="team_social_icons"><Link href="https://facebook.com/charlesmuoka"><a><FontAwesomeIcon icon={['fab', 'facebook']} color="#000057"/></a></Link></div>
                                                <div class="team_social_icons"><Link href="https://twitter.com/charlesmuoka"><a><FontAwesomeIcon icon={['fab', 'twitter']} color="#068979"/></a></Link></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="teamcon">
                                        <img class="w-full teampic" src="theme-assets/images/mypics.jpg" alt="Sunset in the mountains" />
                                        <div class="team_member_title">Head Developer</div>
                                        <div class="teampost">
                                            <div class="team_socials"> 
                                                <div class="team_social_icons"><Link href="https://facebook.com/charlesmuoka"><a><FontAwesomeIcon icon={['fab', 'facebook']} color="#000057"/></a></Link></div>
                                                <div class="team_social_icons"><Link href="https://twitter.com/charlesmuoka"><a><FontAwesomeIcon icon={['fab', 'twitter']} color="#068979"/></a></Link></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <section class="exchange-listing" id="exchange-listing">
                        <div class="container-fluid bg-color">
                            <div class="container">
                                <div class="row listing list-unstyled">
                                    <div class="col d-none d-lg-block text-center animated" data-animation="fadeInUpShorter" data-animation-delay="0.2s">
                                        <img src="theme-assets/images/icon-arrow.png" alt="icon-arrow"/>
                                        <p class="grey-accent2 mt-1">MTD Partner <br/>& Support </p>
                                    </div>
                                    <div class="col text-center animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                                        <img src="theme-assets/images/partner/ibm-blockchain-logo.png" width="120px" alt="IBM Blockchain"/>
                                    </div>
                                    <div class="col text-center animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                                        <img src="theme-assets/images/partner/people-ai-logo.png" width="120px" alt="People AI"/>
                                    </div>
                                    <div class="col text-center animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                                        <img src="theme-assets/images/partner/mxc-logo.jpg" width="120px" alt="MXC Exchange"/>
                                    </div>
                                    <div class="col text-center animated" data-animation="fadeInUpShorter" data-animation-delay="0.3s">
                                        <img src="theme-assets/images/partner/pancakeswap-logo.png" width="120px" alt="Pancakeswap"/>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </section>
        </main>
    </div>
    </div>

    </div>

  )
}
