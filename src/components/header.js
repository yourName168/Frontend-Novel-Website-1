import styles from './Header.module.css';


const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerBottom}>
                <div className={styles.rectangleParent}>
                    <div className={styles.groupChild} />
                    <div className={styles.lchSWrapper}>
                        <b className={styles.lchS}>Lịch sử</b>
                    </div>
                    <div className={styles.mingcutedownLineParent}>
                        <img className={styles.mingcutedownLineIcon} alt="" src="mingcute:down-line.svg" />
                        <b className={styles.xpHng}>Xếp hạng</b>
                    </div>
                    <div className={styles.mingcutedownLineGroup}>
                        <div className={styles.mingcutedownLine} />
                        <b className={styles.tcGi}>Tác giả</b>
                    </div>
                    <div className={styles.thLoiParent}>
                        <b className={styles.thLoi}>Thể loại</b>
                        <img className={styles.mingcutedownLineIcon1} alt="" src="mingcute:down-line.svg" />
                    </div>
                    <div className={styles.rectangleGroup}>
                        <div className={styles.groupItem} />
                        <img className={styles.mingcutesearchLineIcon} alt="" src="mingcute:search-line.svg" />
                        <b className={styles.tmKim}>Tìm kiếm...</b>
                    </div>
                    <img className={styles.gameIconswhiteBook} alt="" src="game-icons:white-book.svg" />
                    <b className={styles.truyen0ptit}>TRUYEN0PTIT</b>
                </div>
            </div>
            <div className={styles.headerTop}>
                <div className={styles.headerTopChild} />
                <div className={styles.button}>
                    <div className={styles.share}>
                        <div className={styles.shareChild} />
                        <b className={styles.chiaS}>Chia sẻ</b>
                    </div>
                    <div className={styles.bottomLike}>
                        <div className={styles.shareChild}>
                            <img className={styles.eilikeIcon} alt="" src="ei:like.svg" />
                            <b className={styles.thch}>Thích</b>
                            <b className={styles.m}>58M</b>
                        </div>
                    </div>
                    <div className={styles.facebook}>
                        <div className={styles.facebookChild} />
                        <img className={styles.evafacebookFillIcon} alt="" src="eva:facebook-fill.svg" />
                        <b className={styles.optitTeam}>OPTIT Team</b>
                    </div>
                </div>
                <b className={styles.ngNhp}>Đăng nhập</b>
                <div className={styles.iuKhonS}>Điều khoản sử dụng</div>
                <img className={styles.phmoonFillIcon} alt="" src="ph:moon-fill.svg" />
            </div>
        </div>);
};

export default Header;
