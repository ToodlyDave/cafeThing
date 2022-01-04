import styles from "../../styles/sidebar.module.css"
import AmountTrack from "./amountTrack";

const SideBar = () => {
    return (
        <div className={styles.sideBar}>
            <AmountTrack />
        </div>
    )
}

export default SideBar;