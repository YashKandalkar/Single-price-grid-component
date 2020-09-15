import React from 'react';
import styles from './PriceComponent.module.css';

const PriceComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topInfo}>
                <header style={{color: '#2bb3b1', fontWeight: '500', fontSize: '1.5rem'}}>
                    Join our community
                </header>
                <p style={{color: '#bfdf32', fontWeight: '600', fontSize: '1rem'}}>
                    30-day, hassle free money back guarentee
                </p>
                <p style={{color: '#888'}}>
                    Gain access to our full library of tutorials along with expert code reviews.
                    <br />
                    Perfect for any developers who are serious about honing their skills.
                </p>
            </div>
            <div className={styles.bottomContainer}>
                <div className={`${styles.bottomChild} ${styles.leftChild}`}>
                    <header style={{color: '#eee', fontWeight: '500', fontSize: '1.2rem'}}>
                        Monthly Subscription
                    </header>
                    <p style={{display: 'flex', alignItems: 'center', marginBottom: 0}}>
                        <span style={{color: '#eee', fontWeight: '500', fontSize: '1.6rem'}}>
                            $29
                        </span>
                        <span style={{color: '#ffffff80', fontWeight: '500', fontSize: '0.9rem'}}>
                            &nbsp;&nbsp;per month
                        </span>
                    </p>
                    <p style={{marginTop: 0, color: '#ffffffcf', fontWeight: '500', fontSize: '0.9rem'}}>
                        Full access for less than $1 a day
                    </p>
                    <button className={styles.signUpButton}>
                        Sign Up
                    </button>
                </div>
                <div className={`${styles.bottomChild} ${styles.rightChild}`}>
                    <header style={{color: '#eee', fontWeight: '500', fontSize: '1.2rem'}}>
                        Why us
                    </header>
                    <p style={{color: '#ffffff99', fontWeight: '400', fontSize: '0.9rem'}}>
                        Tutorials by industry experts <br />
                        Peer and expert code review <br />
                        Coding exercises <br />
                        Access to GitHub repos <br />
                        Community forums <br />
                        Flashcard decks <br />
                        New videos every week <br />
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default PriceComponent;