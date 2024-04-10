import { FunctionComponent } from 'react';
import styles from './Footer.module.css';


const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.containerFooter}>
				<div className={styles.div}>
					<b className={styles.fanpageCaTi}>Fanpage của tụi mình nè!</b>
					<div className={styles.rectangleParent}>
						<div className={styles.groupChild} />
						<div className={styles.rectangleGroup}>
							<img className={styles.groupItem} alt="" src="Rectangle 36.png" />
							<div className={styles.ptitTeam}>PTIT Team</div>
							<div className={styles.rectangleContainer}>
								<div className={styles.groupInner} />
								<img className={styles.uilfacebookIcon} alt="" src="uil:facebook.svg" />
								<div className={styles.theoDiTrang}>Theo dõi Trang</div>
							</div>
							<div className={styles.mTheoDi}>66M theo dõi</div>
						</div>
					</div>
				</div>
				<div className={styles.div1}>
					<div className={styles.thngBoT}>Thông báo từ truyenoptit.com</div>
					<div className={styles.tonBTruyn}>Toàn bộ truyện trên website truyenoptit.com điều được sưu tầm trên internet hoặc do các nhóm dịch đăng tải và chia sẻ theo các điều khoản của website. Chúng tôi không sở hữu hay chịu trách nhiệm bất kỳ thông tin nào trên website này. Nếu nội dung có làm ảnh hưởng đến cá nhân hay tổ chức nào theo quy định của Pháp luật nước Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam, khi được yêu cầu, chúng tôi sẽ xem xét và gỡ bỏ ngay lập tức.</div>
				</div>
				<div className={styles.div2}>
					<div className={styles.thngTin}>Thông tin</div>
					<div className={styles.designByOpit}>Design by  OPIT</div>
					<div className={styles.iuKhonS}>Điều khoản sử dụng</div>
				</div>
			</div>
		</div>);
};

export default Footer;
