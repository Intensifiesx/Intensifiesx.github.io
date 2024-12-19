import Footer from "./Components/Footer";
import bg from "../Images/Zain.png";
import "./CSS/SecondaryHome.css";

export default function MainPage() {
    return (
        <div className="home">
            <div className="nameFill">
                <div className="name">
                    <img src={bg} alt="Zain" rel="preload" />
                    <br />
                    Hi, I'm
                    <br />
                    <p style={{ fontSize: "50px" }}>Zain Hindi</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
