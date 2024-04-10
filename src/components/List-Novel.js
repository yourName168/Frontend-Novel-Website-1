import styles from './List-Novel.module.css';


export const Novel = ({ title, image, views, followers, date, chapter }) => {
    return (
            <div className={styles.item1}>
                <div className={styles.item11}>
                    <div className={styles.itemImageParent}>
                        <img className={styles.itemImageIcon} alt="" src={image} />
                        <div className={styles.view}>
                            <img className={styles.carbonviewFilledIcon} alt="" src="carbon:view-filled.svg" />
                            <b className={styles.b}>{views}</b>
                        </div>
                        <div className={styles.user}>
                            <img className={styles.mingcuteuserFollowFillIcon} alt="" src="mingcute:user-follow-fill.svg" />
                            <b className={styles.b1}>{followers}</b>
                        </div>
                    </div>
                    <b className={styles.vtCnTnh}>{title}</b>
                    <div className={styles.groupParent}>
                        <div className={styles.mdiclipboardTextDateParent}>
                            <img className={styles.mdiclipboardTextDateIcon} alt="" src="mdi:clipboard-text-date.svg" />
                            <div className={styles.div}>{date}</div>
                        </div>
                        <div className={styles.mingcutepaperFillParent}>
                            <img className={styles.mdiclipboardTextDateIcon} alt="" src="mingcute:paper-fill.svg" />
                            <div className={styles.chap20}>{chapter}</div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

const ListNovel = () => {
    // Mảng các đối tượng truyện
    const novels = [
        {
            title: "Vết Cắn Tình Yêu",
            image: "item-image1.png",
            views: "1.793.820",
            followers: "100",
            date: "12/06/23",
            chapter: "Chap 20"
        },
        {
            title: "Tên Truyện 2",
            image: "item-image2.png",
            views: "2.000.000",
            followers: "150",
            date: "10/05/23",
            chapter: "Chap 15"
        },
        // Thêm các đối tượng truyện khác vào đây nếu cần
    ];

    return (
        <div className={styles.bodyContainerLeft}>

            {novels.map((novel, index) => (
                <ListNovel
                    key={index}
                    title={novel.title}
                    image={novel.image}
                    views={novel.views}
                    followers={novel.followers}
                    date={novel.date}
                    chapter={novel.chapter}
                />
            ))}
        </div>
    );
};

export default ListNovel;