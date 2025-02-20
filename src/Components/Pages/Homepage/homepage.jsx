import './Homepage.css'
import Header from '../../Header/header'
import Band from '../../Band/Band'
import Moviesslide from '../../Movies-slide1/moviesslide'
import Topsearch from '../../Topsearch/topsearch'

function Homepage() {

    return (
        <>
            <div className='homepage'>
                <div>        
                    <Header />
                </div>
                <div>
                    <Band />
                </div>
                <div>
                    <Moviesslide />
                </div>
                <div>
                    <Topsearch />
                </div>
            </div>
        </>
    )
}

export default Homepage
