import "./moviesslide.css"
import wednesdayImage from '../../assets/wednesday.jpeg';
import citadelImage from '../../assets/citadel.jpeg';
import avatarImage from '../../assets/avatar.jpeg';
import galaxyImage from '../../assets/galaxy.jpeg';
import rrrImage from '../../assets/RRR.jpeg';

function Moviesslide() {

    return (
        <>
            <div className="movieslide">
                <div className="ti">
                    <h1>Latest & Trending</h1><br></br>
                </div>
                <div className="movies">
                    <div className="num">
                        <span>1</span>
                        <div className="image-overlay">
                            <img src={wednesdayImage} alt="Image 1" />
                        </div>
                    </div>
                    <div className="num">
                        <span>2</span>
                        <div className="image-overlay">
                            <img src={citadelImage} alt="Image 2" />
                        </div>
                    </div>
                    <div className="num">
                        <span>3</span>
                        <div className="image-overlay">
                            <img src={avatarImage} alt="Image 3" />
                        </div>
                    </div>
                    <div className="num">
                        <span>4</span>
                        <div className="image-overlay">
                            <img src={galaxyImage} alt="Image 4" />
                        </div>
                    </div>
                    <div className="num">
                        <span>5</span>
                        <div className="image-overlay">
                            <img src={rrrImage} alt="Image 5" />
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Moviesslide
