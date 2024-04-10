import styles from './Banner-Category.module.css';


const BannerCategory = () => {
  	return (
    		<div className={styles.banner}>
      			<img className={styles.bannerBackgroundIcon} alt="" src="banner- background.png" />
      			<div className={styles.leftBanner}>
        				<div className={styles.truynParent}>
          					<b className={styles.truyn}>
            						<p className={styles.truyn1}>1.234 truyện</p>
          					</b>
          					<b className={styles.lastUpdated03042024}>Last updated: 03/04/2024</b>
        				</div>
        				<b className={styles.thLoi}>THỂ LOẠI</b>
        				<div className={styles.leftTopBanner}>
          					<img className={styles.image3Icon} alt="" src="image 3.png" />
          					<div className={styles.amM}>
            						<div className={styles.amMChild} />
            						<div className={styles.amM1}>Đam Mỹ</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.rightBanner}>
        				<div className={styles.rightBannerChild} />
        				<div className={styles.truynTnhCm}>Truyện tình cảm giữa nam và nam.</div>
        				<b className={styles.thngTinTh}>THÔNG TIN THỂ LOẠI:</b>
      			</div>
    		</div>);
};

export default BannerCategory;
