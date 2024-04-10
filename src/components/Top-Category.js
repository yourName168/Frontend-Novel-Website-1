import styles from './Top-Category.module.css';
const Category = ({ categoryName, CategoryId, categoryImage }) => {
    return (
        <div className={styles.itemThLoi}>
            <img className={styles.image3Icon} alt="" src="" />
            <div className={styles.amM}>
                <div className={styles.amMChild} />
                <div className={styles.amM1}>{categoryName}</div>
            </div>
        </div>
    )
}
const ListCategory = [
    {
        categoryName: "Đam Mỹ",
        CategoryId: "1",
        categoryImage: "image 3.png"
    },
    {
        categoryName: "Ngôn Tình",
        CategoryId: "2",
        categoryImage: "image 3.png"
    },
    {
        categoryName: "Huyền Huyễn",
        CategoryId: "3",
        categoryImage: "image 3.png"
    },

]
const TopCategory = () => {
    return (
        <div className={styles.thLoiYuThchNht}>
            <div className={styles.bodyContainerRightCategory} />
            <b className={styles.thLoiC}>THỂ LOẠI ĐƯỢC YÊU THÍCH</b>
            <div className={styles.itemThLoiYuThch}>
                {ListCategory.map((category, index) => (
                    <Category
                        key={index}
                        categoryName={category.categoryName}
                        CategoryId={category.CategoryId}
                        categoryImage={category.categoryImage}
                    />
                ))
                }
            </div>
        </div>);
};

export default TopCategory;
