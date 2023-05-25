import { useState, useEffect } from "react";
import "../Styles/Components/HeaderComponent.css"
import Logo from "../Assets/Images/logo.png";
function HeaderComponent() {
    // const [screenSize, getDimension] = useState({
    //     dynamicWidth: window.innerWidth,
    //     dynamicHeight: window.innerHeight
    //   });
    //   const setDimension = () => {
    //     getDimension({
    //       dynamicWidth: window.innerWidth,
    //       dynamicHeight: window.innerHeight
    //     })
    //   }
      
    //   useEffect(() => {
    //     window.addEventListener('resize', setDimension);
        
    //     return(() => {
    //         window.removeEventListener('resize', setDimension);
    //     })
    //   }, [screenSize])

    const url_value = window.location.href.replace('http://localhost:3000/','');

    return(
        <header>
            <div className="container header-main pt-2 p-0">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid p-0">
                        <a href="/">
                            <img src={Logo} alt="Logo" style={{"width":"200px","height":"auto"}}/>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse ms-5" id="navbarNav">
                            <ul class="navbar-nav d-flex justify-content-end">
                                <li class="nav-item mx-2">
                                    {
                                        url_value === "" ? <a class="nav-link active" href="/">Home</a> : <a class="nav-link" href="/">Home</a>
                                    }
                                </li>
                                <li class="nav-item mx-2">
                                    {
                                        url_value === "products" ? <a class="nav-link active" href="/">Tools & Products</a> : <a class="nav-link" href="/">Tools & Products</a>
                                    }
                                </li>
                                <li class="nav-item mx-2">
                                    {
                                        url_value === "services" ? <a class="nav-link active" href="/">Services</a> : <a class="nav-link" href="/">Services</a>
                                    }
                                </li>
                                <li class="nav-item mx-2">
                                    {
                                        url_value === "blog" ? <a class="nav-link active" href="/blog">Blog</a> : <a class="nav-link" href="/blog">Blog</a>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default HeaderComponent;