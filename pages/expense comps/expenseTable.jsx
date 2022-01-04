import styles from "../../styles/expenses.module.css"

const ExpenseTable = () => {

    const tableContent = [{
        date: "05-01-20220",
        category: "food",
        amount: 123
    },
    {
        date: "04-01-20220",
        category: "net",
        amount: 321
    },
    {
        date: "03-01-20220",
        category: "air",
        amount: 456
    }];

    return (
        // <div className={styles.expenses}>
        <div>
            <table className={styles.expenseTable}>
                <thead className={styles.expenseHeader}>
                    <tr>
                        <td>DATE</td>
                        <td>CATEGORY</td>
                        <td>AMOUNT</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableContent.map( (value, index) => {
                            console.log("the data: ", value);
                            return(
                                <tr key={index}>
                                    <td>{value.date}</td>
                                    <td>{value.category}</td>
                                    <td>{value.amount}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseTable