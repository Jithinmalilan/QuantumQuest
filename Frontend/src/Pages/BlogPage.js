import '../Styles/Pages/HomePage.css';
import HeaderComponent from '../Components/HeaderComponent';
import MasterCardComponent from '../Components/MasterCardComponent';
import MasterCardData from '../Assets/Data/MasterCardData.json';
import ChildCardComponent from '../Components/ChildCardComponent';

function BlogPage(){

    const info= MasterCardData[0];

    return(
        <div className='container'>
            <HeaderComponent />
            <div className='d-flex justify-content-center' style={{"marginTop":"75px"}}>
                <span style={{"fontWeight":"500","fontSize":"18px"}}>The blog</span>
            </div>
            <div className='d-flex justify-content-center' style={{"marginTop":"10px"}}>
                <span style={{"fontWeight":"bold","fontSize":"56px"}}>Writings from our team</span>
            </div>
            <div className='d-flex justify-content-center' style={{"marginTop":"20px"}}>
                <span style={{"fontWeight":"500","fontSize":"18px"}}>The latest industry news, interviews, technologies and resources</span>
            </div>
            <div style={{"marginTop":"50px"}}>
                <MasterCardComponent data={info}/>
            </div>
            <div className='' style={{"marginTop":"60px"}}>
                <span style={{"fontWeight":"700","fontSize":"20px","textDecoration":"underline","userSelect":"none"}}>Trending Now</span>
            </div>
            <div className='categoryGrid mb-5' style={{"marginTop":"40px","marginLeft":"12px"}}>
                <ChildCardComponent data={info}/>
                <ChildCardComponent data={info}/>
                <ChildCardComponent data={info}/>
                <ChildCardComponent data={info}/>
                <ChildCardComponent data={info}/>
                <ChildCardComponent data={info}/>
            </div>
            <div className='' style={{"marginTop":"60px"}}>
                <span style={{"fontWeight":"700","fontSize":"20px","textDecoration":"underline","userSelect":"none"}}>New Releases</span>
            </div>
            <div className='categoryGrid mb-5' style={{"marginTop":"40px","marginLeft":"12px"}}>
                <ChildCardComponent data={info}/>
                <ChildCardComponent data={info}/>
                <ChildCardComponent data={info}/>
                <ChildCardComponent data={info}/>
                <ChildCardComponent data={info}/>
                <ChildCardComponent data={info}/>
            </div>
        </div>
    );
}

export default BlogPage;