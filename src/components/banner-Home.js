import styles from './Banner-Home.module.css';
import { Novel } from './List-Novel';

const ListNovelTopView = [
    {
        novelName: "Vết Cắn Tình Yêu",
        title: "Vết Cắn Tình Yêu",
        image: "item-image1.png",
        views: "1.793.820",
        followers: "100",
        date: "12/06/23",

    }, {
        novelName: "Vết Cắn Tình Yêu",
        title: "Vết Cắn Tình Yêu",
        image: "item-image1.png",
        views: "1.793.820",
        followers: "100",
        date: "12/06/23",

    }, {
        novelName: "Vết Cắn Tình Yêu",
        title: "Vết Cắn Tình Yêu",
        image: "item-image1.png",
        views: "1.793.820",
        followers: "100",
        date: "12/06/23",

    }, {
        novelName: "Vết Cắn Tình Yêu",
        title: "Vết Cắn Tình Yêu",
        image: "item-image1.png",
        views: "1.793.820",
        followers: "100",
        date: "12/06/23",

    }, {
        novelName: "Vết Cắn Tình Yêu",
        title: "Vết Cắn Tình Yêu",
        image: "item-image1.png",
        views: "1.793.820",
        followers: "100",
        date: "12/06/23",

    }, {
        novelName: "Vết Cắn Tình Yêu",
        title: "Vết Cắn Tình Yêu",
        image: "item-image1.png",
        views: "1.793.820",
        followers: "100",
        date: "12/06/23",

    }, {
        novelName: "Vết Cắn Tình Yêu",
        title: "Vết Cắn Tình Yêu",
        image: "item-image1.png",
        views: "1.793.820",
        followers: "100",
        date: "12/06/23",

    },
]
const Banner = () => {
    return (
        <div className={styles.image1Parent}>
            <img className={styles.image1Icon} alt="" src="image 1.png" />
            <div className={styles.truynHay}>TRUYỆN HAY ĐỀ CỬ</div>
            <div className={styles.image2Parent}>
                <Novel
                    novelName="Vết Cắn Tình Yêu"
                    title="Vết Cắn Tình Yêu"
                    image="item-image1.png"
                    views="1.793.820"
                    followers="100"
                    date="12/06/23"
                />

            </div>
            <div className={styles.imageSliderLinh}>
                <div className={styles.groupSlider}>
                    {ListNovelTopView.map((novel, index) => (
                        <Novel
                            key={index}
                            novelName={novel.novelName}
                            title={novel.title}
                            image={novel.image}
                            views={novel.views}
                            followers={novel.followers}
                            date={novel.date}
                        />
                    ))
                    }
                </div>
            </div>
        </div>);
};

export default Banner;
