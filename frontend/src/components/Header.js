import myImage from '../images/omakuva2.jpg';

function Header( { headerSub }) {
    return (
        // Header-osio, joka hakee alatekstin backendistä ja näyttää sen kuvan päällä
        <div className="image-container">
            <img src={myImage} alt="Eetu Salminen" className="header-image" />
            
            <div className="text-overlay">
                <h1>Eetu Salminen</h1>
                <h2>{headerSub}</h2>
            </div>  
        </div>
    )
}

export default Header;