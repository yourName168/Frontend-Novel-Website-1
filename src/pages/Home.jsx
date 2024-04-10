import React from 'react';
import Footer from '../components/Footer';
import ListNovel from '../components/List-Novel';
import Pagination from '../components/Pagination';
import TopCategory from '../components/Top-Category';
import TopViewNovel from '../components/Top-View-Novel';
import Banner from '../components/banner-Home';
import Header from '../components/header';
import styles from './Home.module.css';
export const Home = () => {
    return (
        <div className="App">
            <div className={styles.desktopLinh}>
                <Banner />
                <div className={styles.body}>
                    <div className={styles.bodyContainer}>
                        <ListNovel />
                        <div className={styles.bodyContainerRight}>
                            <TopCategory />
                            <TopViewNovel />
                        </div>
                        <Pagination />
                    </div>
                </div>
                <Footer />
                <Header />
            </div>

        </div>
    );
}