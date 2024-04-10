import styles from './Regitster.module.css';

const Register = () => {
    return (
        <div className={styles.registerLight}>
            <div className={styles.registerLight1}>
                <div className={styles.background} />
                <div className={styles.background} />
                <b className={styles.register}>Đăng ký</b>
                <div className={styles.name}>
                    <div className={styles.fullName}>Tên</div>
                </div>
                <div className={styles.email}>
                    <div className={styles.fullName}>E-mail</div>
                </div>
                <div className={styles.phone}>
                    <div className={styles.fullName}>Số điện thoại</div>
                </div>
                <div className={styles.password}>
                    <div className={styles.fullName}>Mật khẩu</div>
                </div>
                <div className={styles.confirmPassword}>
                    <div className={styles.fullName}>Nhập lại mật khẩu</div>
                </div>
                <div className={styles.registerBtn}>
                    <div className={styles.fullName}>Đăng ký</div>
                </div>
                <div className={styles.signupBtn}>
                    <div className={styles.fullName}>Đã có tài khoản? Đăng nhập</div>
                </div>
            </div>
        </div>);
};

export default Register;
