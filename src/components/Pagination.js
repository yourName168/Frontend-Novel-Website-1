import { FunctionComponent } from 'react';
import styles from './Pagination.module.css';


const Pagination = () => {
  	return (
    		<div className={styles.pageNav}>
      			<div className={styles.page1}>
        				<div className={styles.page1Child} />
        				<b className={styles.b}>1</b>
      			</div>
      			<div className={styles.page2}>
        				<div className={styles.page2Child} />
        				<b className={styles.b1}>2</b>
      			</div>
      			<div className={styles.pageNext}>
        				<div className={styles.page2Child} />
        				<div className={styles.pageNextItem} />
        				<b className={styles.trangCui}>Trang cuối</b>
        				<b className={styles.b2}>{`>`}</b>
      			</div>
      			<div className={styles.page4}>
        				<div className={styles.page2Child} />
        				<b className={styles.b1}>4</b>
      			</div>
      			<div className={styles.page3}>
        				<div className={styles.page2Child} />
        				<b className={styles.b1}>3</b>
      			</div>
    		</div>);
};

export default Pagination;
