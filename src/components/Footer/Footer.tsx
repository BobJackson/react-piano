import styles from "./Footer.module.css"

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <a href="https://wangyousong.com">wangyousong.com</a>
            <br/>
            {currentYear}
        </footer>
    )
}