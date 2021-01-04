import styles from './CarouselNavigation.module.css';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';


export default function CarouselNavigation() {
    return (
        <div className={styles.carouselNavigation}>
            {/* Carousel navigation; use style={{ display: showNav ? "flex" : "none" }} to hide nav for single-image project 
            <span className={showNav ? "carousel-nav" : "carousel-nav single"} >
                <button className="carousel-nav-direction" style={{ display: showNav ? "flex" : "none" }}>
                    <ArrowBack className="carousel-nav-direction-icon" />
                </button>
                <span className="carousel-nav-position">
                    {galleryData.map((image, index) => {
                        return <button className={index === 0 ?
                            "carousel-nav-position-dot selected" : "carousel-nav-position-dot"} key={index}>
                            <PositionDot className="carousel-nav-position-dot-icon" />
                        </button>;
                    })}
                </span>
                <button className="carousel-nav-direction forward" style={{ display: showNav ? "flex" : "none" }} >
                    <ArrowForward className="carousel-nav-direction-icon" />
                </button>
            </span>*/}
        </div>
    )
}













