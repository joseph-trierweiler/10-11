import React from 'react';
import styles from './rewards.module.css';
import NoodleImg from '../../assets/images/Noodles.png';



const RewardsPage = ( ) => {
    const RewardsInfo = {
        title: 'NOODLES REWARDS',
        heading: 'The fastest way to free noodles',
        description: 'Earn points ordering your faves and cash them out for a variety of rewards in the Rewards Exchange. Check out your Extras for ways to unlock extra points and collect exclusive badges. Not a member yet? Join to start earning.',
        terms: 'Program Terms'
    }
    return(
        <div className={styles.rewardsContainer} data-testid='rewardsContainer'>
            <div className={styles.rewardsTextContainer}>
                <div className={styles.rewardsText}>
                    <p className={styles.rewardsTitle}>{RewardsInfo.title}</p>
                    <h1 className={styles.rewardsHeading }>{RewardsInfo.heading} </h1>
                    <p className={styles.rewardsDescription}>{RewardsInfo.description}
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