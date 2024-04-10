import Footer from "../components/Footer";
import ReadEreaChapter from "../components/Read-Erea-Chapter";
import SideBarChapterContent from "../components/Side-Bar-Chapter-Content";
import Header from "../components/header";
import styles from "./Chapter-Content.module.css";
const ChapterContent = () => {
    return (
        <div className={styles.desktopC}>
            <Footer />
            <Header />
            <ReadEreaChapter />
            <SideBarChapterContent />
            <b className={styles.tnTruyn}>TÊN TRUYỆN</b>
        </div>
    )
}
export default ChapterContent;
