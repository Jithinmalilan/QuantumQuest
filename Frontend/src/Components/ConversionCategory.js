import "../Styles/Components/ConversionCategory.css";

function ConversionCategory(props){

    return(
        <div className="container conversionCatCard-container" style={{"backgroundImage":`url(${props.data.Image_URL})`}}>
            <div className="conversionCatCard-topContainer">

            </div>
            <div className="conversionCatCard-bottomContainer d-flex align-items-center justify-content-start ps-3">
                <span style={{"fontWeight":"500","color":"white"}}>{props.data.CategoryName}</span>
            </div>
        </div>
    );
}

export default ConversionCategory;