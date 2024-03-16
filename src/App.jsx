import "./App.css";
import IconBookmarkFill from "./components/svg-icon/IconBookmarkFill";
import { slide4 } from "./helper/imageImport";

function App() {
    return (
        <>
            <header>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Contact</a>
                    <a href="#">About</a>
                </nav>
            </header>
            {/* sliders */}
            <div className="main-hero">
                <img className="slide-image" alt="slide1" src={slide4}></img>

                <div className="hero-text-box">
                    <div className="hero-text">
                        <h3 className="hero-sub-text">Kerala Lakes</h3>
                        <h1 className="hero-main-text">Cochin</h1>
                        <p className="hero-caption">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsam aspernatur deserunt quo maiores repellat
                            praesentium dolorum eligendi quia ducimus minus.
                            Pariatur recusandae quo quisquam possimus et,
                            commodi doloremque voluptatem. Commodi, explicabo
                            corporis? Deserunt cupiditate hic atque officia!
                            Nihil, ipsa minus, corporis consectetur quae enim
                            excepturi deleniti modi sunt ut doloribus.
                        </p>
                    </div>
                    <div className="hero-cta-container">
                        <button className="icon-round">
                            <IconBookmarkFill />
                        </button>
                        <button className="outlined-round">
                            Discover more
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
