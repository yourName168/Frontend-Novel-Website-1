import styles from './Top-View-Novel.module.css';

const topViewNovel = ({ title, image, views, followers, date, chapter, novelName }) => {
    return (
        <div className={styles.itemLineCXemNhiu}>
            <div className={styles.itemCXemNhiu}>
                <b className={styles.mThcLon}>{novelName}</b>
                <div className={styles.inforItem}>
                    <img className={styles.image4Icon} alt="" src="image 4.png" />
                    <div className={styles.inforItem1}>
                        <div className={styles.chap}>
                            <img className={styles.mingcutepaperFillIcon} alt="" src="mingcute:paper-fill.svg" />
                            <div className={styles.chap20}>Chap 20</div>
                        </div>
                        <div className={styles.ngy}>
                            <img className={styles.mingcutepaperFillIcon} alt="" src="mdi:clipboard-text-date.svg" />
                            <div className={styles.div}>12/06/23</div>
                        </div>
                        <div className={styles.view}>
                            <img className={styles.mingcutepaperFillIcon} alt="" src="carbon:view-filled.svg" />
                            <div className={styles.div1}>1.793.820</div>
                        </div>
                        <div className={styles.user}>
                            <img className={styles.mingcutepaperFillIcon} alt="" src="mingcute:user-follow-fill.svg" />
                            <div className={styles.div2}>100</div>
                        </div>
                        <div className={styles.xemNgay}>
                            <div className={styles.xemNgayInner}>
                                <div className={styles.instanceChild} />
                            </div>
                            <div className={styles.xemNgay1}>XEM NGAY</div>
                        </div>
                    </div>
                </div>
            </div>
            <img className={styles.itemLineCXemNhiuChild} alt="" src="Line 1.svg" />
        </div>
    )
}
const ListTopViewNovel = [
    {
        novelName: "Vết Cắn Tình Yêu",
        title: "Vết Cắn Tình Yêu",
        image: "item-image1.png",
        views: "1.793.820",
        followers: "100",
        date: "12/06/23",
        chapter: "Chap 20"
    },
    {
        novelName: "Tên Truyện 2",
        title: "Tên Truyện 2",
        image: "item-image2.png",
        views: "2.000.000",
        followers: "150",
        date: "10/05/23",
        chapter: "Chap 15"
    },
    {
        novelName: "Tên Truyện 3",
        title: "Tên Truyện 3",
        image: "item-image3.png",
        views: "1.000.000",
        followers: "200",
        date: "11/05/23",
        chapter: "Chap 10"
    },
    {
        novelName: "Tên Truyện 4",
        title: "Tên Truyện 4",
        image: "item-image4.png",
        views: "3.000.000",
        followers: "300",
        date: "13/05/23",
        chapter: "Chap 25"
    },
    {
        novelName: "Tên Truyện 5",
        title: "Tên Truyện 5",
        image: "item-image5.png",
        views: "4.000.000",
        followers: "400",
        date: "14/05/23",
        chapter: "Chap 30"
    },
]
const TopViewNovel = () => {
    return (
        <div className={styles.cXemNhiuNht}>
            <b className={styles.cXemNhiu}>ĐƯỢC XEM NHIỀU NHẤT</b>
            <div className={styles.cXemNhiuNht1}>
                {ListTopViewNovel.map((novel, index) => (
                    <topViewNovel
                        key={index}
                        title={novel.title}
                        image={novel.image}
                        views={novel.views}
                        followers={novel.followers}
                        date={novel.date}
                        chapter={novel.chapter}
                        novelName={novel.novelName}
                    />
                ))
                }
            </div>
        </div>);
};

export default TopViewNovel;
