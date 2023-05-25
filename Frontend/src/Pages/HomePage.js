import '../Styles/Pages/HomePage.css';
import HeaderComponent from '../Components/HeaderComponent';
import MasterCardComponent from '../Components/MasterCardComponent';
import ConversionCategoryData from '../Assets/Data/ConversionCategory.json';
import MasterCardData from '../Assets/Data/MasterCardData.json';
import ConversionCategory from '../Components/ConversionCategory';
import CarouselCardComponent from '../Components/CarouselCardComponent';
import ChildCardComponent from '../Components/ChildCardComponent';
import FooterComponent from '../Components/FooterComponent';

function HomePage(){

    const info1= MasterCardData[0];
    const info2= ConversionCategoryData;

    return(
        <div className='container'>
            <HeaderComponent />
            <div style={{"marginTop":"70px"}}>
                <CarouselCardComponent />
            </div>
            {/*<div className='d-flex flex-column align-items-center' style={{"marginTop":"100px"}}>
                <img src={Quantum} width='250' height='250'/>
                <span className='mt-5' style={{"fontWeight":"bold","fontSize":"44px","fontFamily": "Goudy Old Style,Garamond,Big Caslon,Times New Roman,serif"}}>Quantum Quest</span>
                <span className='mt-3' style={{"fontWeight":"500","fontSize":"20px","fontFamily": "Goudy Old Style,Garamond,Big Caslon,Times New Roman,serif"}}>" Unleashing Innovation, Delivering Results: Experience Our Services "</span>
                <span className='mt-5' style={{"fontWeight":"500","fontSize":"18px", "lineHeight":"3","fontFamily": "Goudy Old Style,Garamond,Big Caslon,Times New Roman,serif", "fontStyle":"italic"}}>"At Quantum Quest, we specialize in providing comprehensive solutions to address your business needs. With our expertise and dedication, we offer a wide range of services designed to propel your success. From strategic consulting and tailored solutions to efficient project management and reliable support, we are committed to delivering excellence in every aspect of our work. Our team of skilled professionals works closely with you to understand your unique challenges and goals, crafting innovative strategies and implementing effective solutions. Whether you require streamlined operations, optimized processes, or enhanced customer experiences, we are here to transform your vision into reality. Trust Quantum Quest to be your trusted partner in driving growth, maximizing efficiency, and achieving sustainable results. Experience the difference of our services and unlock your business's full potential."</span>
            </div>*/}
            <div className='d-flex flex-column align-items-center' style={{"marginTop":"100px"}}>
                <span style={{"fontWeight":"bold","fontSize":"30px","fontFamily": "Arial Rounded MT Bold,Helvetica Rounded,Arial,sans-serif"}}>Tools & Products</span>
                <span className='mt-3' style={{"fontWeight":"500","fontSize":"20px","fontFamily": "Goudy Old Style,Garamond,Big Caslon,Times New Roman,serif"}}>Every tool needed in your day to day life in one place</span>
            </div> 
            <div className='categoryGrid ps-4 mb-4' style={{"marginTop":"40px"}}>
            {
                info2 === null ? null:
                info2.map((info) =>{
                    return(
                        <ConversionCategory data={info} />
                    )
                })
            }
            </div>
            <div className='d-flex justify-content-end pe-4'>
                <span className='linkbutton'>View more &gt;&gt;</span>
            </div>
            <div className='d-flex flex-column align-items-center' style={{"marginTop":"100px"}}>
                <span style={{"fontWeight":"bold","fontSize":"30px","fontFamily": "Arial Rounded MT Bold,Helvetica Rounded,Arial,sans-serif"}}>Services that we offer</span>
                <span className='mt-3' style={{"fontWeight":"500","fontSize":"18px","fontFamily": "Goudy Old Style,Garamond,Big Caslon,Times New Roman,serif"}}>We help you to find out the best soultions for your queries. You can explore the variety of services that we offer to make your day more easier and smarter.</span>
            </div> 
            <div className='categoryGrid ps-4 mb-4' style={{"marginTop":"40px"}}>
            {
                info2 === null ? null:
                info2.map((info) =>{
                    return(
                        <ConversionCategory data={info} />
                    )
                })
            }
            </div>
            <div className='d-flex justify-content-end pe-4'>
                <span className='linkbutton'>View more &gt;&gt;</span>
            </div>
            <div className='d-flex flex-column align-items-center' style={{"marginTop":"100px"}}>
                <span style={{"fontWeight":"bold","fontSize":"30px","fontFamily": "Arial Rounded MT Bold,Helvetica Rounded,Arial,sans-serif"}}>Check out our recent posts</span>
                <span className='mt-3' style={{"fontWeight":"500","fontSize":"18px","fontFamily": "Goudy Old Style,Garamond,Big Caslon,Times New Roman,serif"}}>You can find out the latest industry news, interviews, technologies and resources</span>
            </div> 
            <div style={{"marginTop":"30px"}}>
                <MasterCardComponent data={info1}/>
            </div>
            <div className='categoryGrid mb-5' style={{"marginTop":"40px","marginLeft":"12px"}}>
                <ChildCardComponent data={info1}/>
                <ChildCardComponent data={info1}/>
                <ChildCardComponent data={info1}/>
            </div>
            <FooterComponent />
        </div>
    );
}

export default HomePage;