import Head from 'next/head'
import React, { useState, useEffect } from "react";
import {useRouter} from "next/router";
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faClock);

const NftMarkeplace = () => {

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
    
return ( 
    <div className={styles.container}>
      <section class="nftmarketplace">
        <h1 class="headernftmk mt-8">OUR NFT MARKET PLACE</h1>
        <div class="nftgridcol">
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
                                <button class="nftbtn" onClick = {generaterandomPrice}  data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">BUY NFT</button>
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
    </section>
    </div>
 );
}

export default NftMarkeplace;
