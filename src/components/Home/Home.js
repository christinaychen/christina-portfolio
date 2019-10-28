import React, { Component } from 'react'
import Background from '../../assets/home-background.jpg'
import styles from './Home.css';

export default class Home extends Component {
    render() {
        return (

            <div>
                <div className={styles.header}>
                    <div className={styles.content}>
                        Portfolio
                    </div>
                </div>
            </div>
        )
    }
}