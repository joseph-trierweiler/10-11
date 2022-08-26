import React from 'react';
import styles from './rewards.module.css';
import NoodleImg from '../../assets/images/Noodles.png';

const RewardsPage = () => {
    return(
        <div className={styles.rewardsContainer}>
            <div className={styles.rewardsTextContainer}>
                <div className={styles.rewardsText}>
                    <p className={styles.rewardsTitle}>NOODLES REWARDS</p>
                    <h1 className={styles.rewardsHeading }>The fastest way to 
                    free noodles </h1>
                    <p className={styles.rewardsDescription}>Earn points ordering your faves and cash them out
                        for a variety of rewards in the Rewards Exchange.
                        Check out your Extras for ways to unlock extra
                        points and collect exclusive badges. Not a
                        member yet? Join to start earning.
                    </p>
                    <div className={styles.rewardsTerms}>
                        Program Terms
                    </div>
                </div>
            </div>
            <div className={styles.rewardsImgContainer}>
                <img className={styles.rewardsImg} src={NoodleImg} alt='Bowl of noodles'/>
            </div>
        </div>
    )
}

export default RewardsPage