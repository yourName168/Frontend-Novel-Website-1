import styles from './Banner-Chapter-Of-Novel.module.css';
const categoryCell = ({ categoryName }) => {
    return (
        <div className={styles.vectorParent}>
            <img className={styles.groupChild} alt="" src="Rectangle 26.svg" />
            <b className={styles.phiuLu}>{categoryName}</b>
        </div>
    )
}

const BannerChapter = ({ novelName, author, novelStatus, view, followed, novelDescription, listCategory, img }) => {
    return (
        <div className={styles.ba}>
            <img className={styles.bannerBackgroundIcon} alt="" src="banner- background.png" />
            <div className={styles.panel}>
                <img className={styles.panelChild} alt="" src="Rectangle 15.svg" />
                <div className={styles.thLoi}>
                    <b className={styles.thLoi1}>THỂ LOẠI</b>
                    <div className={styles.vectorParent}>
                        <img className={styles.groupChild} alt="" src="Rectangle 26.svg" />
                        {listCategory.map((category, index) => (
                            <categoryCell key={index} categoryName={category.categoryName} />
                        ))}
                    </div>
                </div>
                <div className={styles.tmTt}>
                    <div className={styles.tmTtChild} />
                    <b className={styles.taiyouAsanoLContainer}>
                        <span>{novelDescription}</span>
                        <span className={styles.xemThm}> Xem thêm</span>
                    </b>
                </div>
                <b className={styles.tn}>{novelName}</b>
                <div className={styles.anhBa}>
                    <div className={styles.anhU}>
                        <img className={styles.anhUChild} alt="" src={img} />
                        <div className={styles.yuThch}>
                            <img className={styles.yuThchChild} alt="" src="Rectangle 17.svg" />
                            <div className={styles.yuThch1}>
                                <img className={styles.vectorIcon} alt="" src="Vector.svg" />
                                <b className={styles.yuThch2}>Yêu thích</b>
                            </div>
                        </div>
                        <div className={styles.chiaS}>
                            <img className={styles.yuThchChild} alt="" src="Rectangle 17.svg" />
                            <div className={styles.chiaS1}>
                                <b className={styles.chiaS2}>Chia sẻ</b>
                                <img className={styles.evafacebookFillIcon} alt="" src="eva:facebook-fill.svg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.gioiThiu}>
                    <div className={styles.haS}>
                        <b className={styles.haS1}>Họa sĩ</b>
                        <a className={styles.angCpNht} href="https://dichtruyenpro06.com/tag/dang-cap-nhat/" target="_blank">{author}</a>
                    </div>
                    <div className={styles.tcGi}>
                        <b className={styles.haS1}>Tác giả</b>
                        <a className={styles.angCpNht1} href="https://dichtruyenpro06.com/tag/dang-cap-nhat/" target="_blank">{author}</a>
                    </div>
                    <div className={styles.trngThi}>
                        <b className={styles.trngThi1}>Trạng thái</b>
                        <a className={styles.angTinHnh} href="https://dichtruyenpro06.com/danh-sach/dang-tien-hanh/" target="_blank">{novelStatus}</a>
                    </div>
                    <div className={styles.ltXem}>
                        <b className={styles.haS1}>Lượt xem</b>
                        <b className={styles.b}>{view}</b>
                    </div>
                    <div className={styles.theoDi}>
                        <b className={styles.haS1}>Theo dõi</b>
                        <b className={styles.b1}>{followed}</b>
                    </div>
                </div>
            </div>
        </div>);
};

export default BannerChapter;
