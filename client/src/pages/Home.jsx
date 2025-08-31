import Navbar from "../components/Navbar"
import Services from "../components/Services"
import Products from "../components/Products"
import News from "../components/News"
import Contact from "../components/Contact"

export default function Home() {
    return (
        <div>
                <Navbar />
                <Services />
                <Products />
                <News />
                <Contact />

        </div>
    )
}
