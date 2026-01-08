import myImage from '../images/Eetu_Salminen_020126_web-205.jpg';

function Header() {
    return (
        <div className="image-container">
            <img src={myImage} alt="My photo!" />
            <div className="text-overlay">
                <h1>Eetu Salminen</h1>
                <h2>IT student minoring Industrial Engineering.</h2>
            </div>  
        </div>
    )
}

export default Header;
