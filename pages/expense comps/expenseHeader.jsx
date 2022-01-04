import styles from "../../styles/expenses.module.css"

const ExpenseHeader = () => {
    return (
        <div className={styles.expenseHeader + " " + styles.expenseItem}>
            <span>DATE</span>
            <span>CATEGORY</span>
            <span>AMOUNT</span>
        </div>
    )
}

export default ExpenseHeader;