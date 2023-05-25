import "../Styles/Components/FooterComponent.css"
import PlayStore from '../Assets/Images/playstore.png'; 
import Youtube from '../Assets/Images/youtube.png';
import AppStore from '../Assets/Images/appstore.png';
import PlayStoreHover from '../Assets/Images/playstore_hover.png'; 
import AppStoreHover from '../Assets/Images/appstore_hover.png'; 
import YoutubeHover from '../Assets/Images/youtube_hover.png'; 
import { useState } from "react";

function FooterComponent (){

    const [mouseoverPlayStore, SetPlayStore] = useState(false);
    const [mouseoverAppStore, SetAppStore] = useState(false);
    const [mouseoverYoutube, SetYoutube] = useState(false);

    return(
        <footer>
            <div style={{"marginTop":"50px"}}>
                <hr />
            </div>
            <div className='container footer-Container'>
                <div>
                    <span style={{"fontWeight":"bold", "fontSize":"28px","fontFamily": "Arial Rounded MT Bold,Helvetica Rounded,Arial,sans-serif"}}>Let's get started on something great </span><br/>
                </div>
                <div className="mt-3">
                    <span  style={{"fontWeight":"normal", "fontSize":"19px","fontStyle":"italic","fontFamily": "Goudy Old Style,Garamond,Big Caslon,Times New Roman,serif", "lineHeight":"2"}}>" Experience a world of personalized content, thought-provoking articles, and exclusive offers when you subscribe to our newsletter. Join our vibrant community and embark on a journey of discovery, where you'll stay informed, inspired, and connected. "</span><br/>
                </div>
                <div class="d-flex justify-content-center mt-4">
                    <input type="text" class="email-box-input" placeholder="Email Address" />
                    <button type="button" class="email-box-button"><i class='bx bx-send'></i></button>
                </div>
                {/* <div style={{"marginTop":"40px"}}>
                    <span style={{"fontWeight":"bold", "fontSize":"20px"}}>Quick Links</span><br/>
                </div> */}
                <div className="row d-flex justify-content-center" style={{"marginTop":"40px"}}>
                    <div className='mt-2' style={{"cursor":"pointer", "width":"fit-content"}} onMouseEnter={()=>SetPlayStore(true)} onMouseLeave={()=>SetPlayStore(false)}>
                        {mouseoverPlayStore === false ? <a href=""><img src={PlayStore} alt="PlayStore-Logo" height="45px"/></a> :
                        <a href=""><img src={PlayStoreHover} alt="PlayStore-Logo" height="45px"/></a>}
                    </div>
                    <div className='mt-2' style={{"cursor":"pointer", "width":"fit-content"}} onMouseEnter={()=>SetAppStore(true)} onMouseLeave={()=>SetAppStore(false)}>
                        {mouseoverAppStore === false ? <a href=""><img src={AppStore} alt="AppStore-Logo" height="45px"/></a> :
                        <a href=""><img src={AppStoreHover} alt="AppStore-Logo" height="45px"/></a>}
                    </div>
                    <div className='mt-2' style={{"cursor":"pointer", "width":"fit-content"}} onMouseEnter={()=>SetYoutube(true)} onMouseLeave={()=>SetYoutube(false)}>
                        {mouseoverYoutube === false ? <a href=""><img src={Youtube} alt="AppStore-Logo" height="45px"/></a> :
                        <a href=""><img src={YoutubeHover} alt="AppStore-Logo" height="45px"/></a>}
                    </div>
                </div>
                
                <div className="d-flex justify-content-center" style={{"marginTop":"35px"}}>
                    <a href='/' className='linkbutton me-5'><span style={{"fontSize": "14px", "cursor":"pointer"}}>Home</span></a>
                    <a href='/' className='linkbutton me-5'><span style={{"fontSize": "14px", "cursor":"pointer"}}>Tools & Products</span></a>
                    <a href='/' className='linkbutton me-5'><span style={{"fontSize": "14px", "cursor":"pointer"}}>Services</span></a><br/>
                    <a href='/' className='linkbutton me-5'><span style={{"fontSize": "14px", "cursor":"pointer"}}>Privacy Policy</span></a>
                    <a href='/' className='linkbutton'><span style={{"fontSize": "14px", "cursor":"pointer"}}>Contact us</span></a><br/>
                </div>
                
                {/* <div className='row mt-3' style={{"height":"100%"}}>
                    <div className='col-2' style={{"textAlign":"left"}}>
                        <div className='mt-3' style={{"cursor":"pointer", "width":"fit-content"}} onMouseEnter={()=>SetPlayStore(true)} onMouseLeave={()=>SetPlayStore(false)}>
                            {mouseoverPlayStore === false ? <a href=""><img src={PlayStore} alt="PlayStore-Logo" height="45px"/></a> :
                            <a href=""><img src={PlayStoreHover} alt="PlayStore-Logo" height="45px"/></a>}
                        </div>
                        <div className='mt-3' style={{"cursor":"pointer", "width":"fit-content"}} onMouseEnter={()=>SetAppStore(true)} onMouseLeave={()=>SetAppStore(false)}>
                            {mouseoverAppStore === false ? <a href=""><img src={AppStore} alt="AppStore-Logo" height="45px"/></a> :
                            <a href=""><img src={AppStoreHover} alt="AppStore-Logo" height="45px"/></a>}
                        </div>
                    </div>

                    <div className='col' style={{"lineHeight":"2", "textAlign":"center"}}>
                        <div className="d-flex justify-content-center">
                            <a href='/' className='linkbutton me-5'><span style={{"fontSize": "14px", "cursor":"pointer"}}>Home</span></a>
                            <a href='/' className='linkbutton me-5'><span style={{"fontSize": "14px", "cursor":"pointer"}}>Tools & Products</span></a>
                            <a href='/' className='linkbutton me-5'><span style={{"fontSize": "14px", "cursor":"pointer"}}>Services</span></a><br/>
                            <a href='/' className='linkbutton me-5'><span style={{"fontSize": "14px", "cursor":"pointer"}}>Privacy Policy</span></a>
                            <a href='/' className='linkbutton'><span style={{"fontSize": "14px", "cursor":"pointer"}}>Contact us</span></a><br/>
                        </div>
                        
                    </div> 

                    <div className='col-2' style={{"textAlign":"right"}}>
                        <div style={{"cursor":"pointer"}} >
                            <span className="me-2" style={{"fontWeight":"bold", "lineHeight":"2"}}>YouTube</span>
                            <a href=""><img src={Youtube} alt="Youtube-Logo" width="30px" height="30px"/></a>
                        </div>
                        {/* <div className='mt-3' style={{"cursor":"pointer"}}>
                            <span className="me-2" style={{"fontWeight":"bold", "lineHeight":"2"}}>Facebook</span>
                            <a href=""><img src={Facebook} alt="FB-Logo" width="30px" height="30px"/></a>
                        </div>
                        <div className='mt-3' style={{"cursor":"pointer"}}>
                            <span className="me-2" style={{"fontWeight":"bold", "lineHeight":"2"}}>Instagram</span>
                            <a href=""><img src={Instagram} alt="FB-Logo" width="30px" height="30px"/></a>
                        </div>

                    </div>
                </div> */}
            </div>
            <div className='d-flex justify-content-center mt-4 mb-3' style={{"height":"20px"}}>
                <span style={{"fontSize":"10px"}}>Copyright © 2023 Quantum Quest. All Rights Reserved</span>
            </div>
        </footer>
    );
}

export default FooterComponent;