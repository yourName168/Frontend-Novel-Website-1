import styles from './List-Chapter.module.css';

const Chapter = ({ chapterName, updateTime, view }) => {
    return (
        <div className={styles.chapter}>
            <b className={styles.chapterName}>{chapterName}</b>
            <div className={styles.updateTime}>{updateTime}</div>
            <div className={styles.view}>{view}</div>
        </div>
    )
}
const ListChapter = ({ listChapter }) => {
    return (
        <div className={styles.lcCpNht}>
            <img className={styles.lcCpNhtChild} alt="" src="Rectangle 33.svg" />
            {listChapter.map((chapter, index) => (
                <Chapter key={index} chapterName={chapter.chapterName} updateTime={chapter.updateTime} view={chapter.view} />
            ))}
            <div className={styles.xemThm}>
                <div className={styles.xemThmChild} />
                <div className={styles.xemThm1}>XEM THÊM</div>
            </div>
        </div>);
};

export default ListChapter;
