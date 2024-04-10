import BannerChapter from "../components/Banner-Chapter-Of-Novel";
import Footer from "../components/Footer";
import ListChapter from "../components/List-Chapter";
import TopViewNovel from "../components/Top-View-Novel";
import Header from "../components/header";
import styles from "./Chapter-Of-Novel.module.css";
const ChapterOfNovel = () => {
    return (
        <div className={styles.desktopChapter}>
            <BannerChapter />
            <Footer />
            <Header />
            <div className={styles.gia}>
                <TopViewNovel />
                <ListChapter />
            </div>
        </div>
    )
}

export default ChapterOfNovel;