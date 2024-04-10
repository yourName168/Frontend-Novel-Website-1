import React from 'react';
import Footer from '../components/Footer';
import ListNovel from '../components/List-Novel';
import Pagination from '../components/Pagination';
import TopCategory from '../components/Top-Category';
import TopViewNovel from '../components/Top-View-Novel';
import BannerCategory from '../components/Banner-Category';
import Header from '../components/header';
import styles from './Novel-Of-Category.module.css';
export const NovelOfCategory = () => {
    return (
        <div className="App">
            <div className={styles.desktopLinh}>
                <BannerCategory />
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
export default NovelOfCategory;