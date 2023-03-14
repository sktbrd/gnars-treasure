import Navbar from "../components/navigation/navbar";
import Favicon from "react-favicon";


export default function MainLayout({ children }) {
	return (
		<div>
            <Navbar />
            {children}
			<Favicon url={["https://thatsgnar.ly/_next/image?url=%2Fimages%2Fthatsgnarly%2Fimg%2Fgnars.svg&w=64&q=75"]} />

		</div>
		
	);
}

