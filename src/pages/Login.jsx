import styles from './Login.module.css';


const Login = () => {
    return (
        <div className={styles.loginLight}>
            <div className={styles.background} />
            <b className={styles.ngNhp}>Đăng nhập</b>
            <div className={styles.loginButton}>
                <div className={styles.hy}>Đăng nhập</div>
            </div>
            <div className={styles.loginButton1}>
                <div className={styles.hy}>Hủy</div>
            </div>
            <div className={styles.passwordFill}>
                <div className={styles.hy}>Mật khẩu</div>
            </div>
            <div className={styles.usernameFill}>
                <div className={styles.hy}>E-mail</div>
            </div>
            <div className={styles.parent}>
                <div className={styles.div}>|</div>
                <div className={styles.qunMtKhu}>Quên mật khẩu</div>
                <div className={styles.ngK}>Đăng ký</div>
            </div>
            <div className={styles.loginLightChild} />
            <div className={styles.antDesigngoogleCircleFilleParent}>
                <img className={styles.antDesigngoogleCircleFilleIcon} alt="" src="ant-design:google-circle-filled.svg" />
                <img className={styles.entypoSocialfacebookWithCiIcon} alt="" src="entypo-social:facebook-with-circle.svg" />
            </div>
        </div>);
};

export default Login;
