import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
				<img
					className={styles.alchemy_logo}
					src="https://gnars.com/wp-content/uploads/2022/08/Gnars-logo-text-dark.png"
				></img>
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
