import "../Styles/Components/MasterCardComponent.css"

function MasterCardComponent(props){

    const tags = props.data.Tags.split(",");

    return(
        <div className="container masterCard-container" style={{ backgroundImage:`url(${props.data.Image_URL})`, "backgroundRepeat":"no-repeat"}}>
            <div className="masterCard-maskLayer">
                <div className="masterCard-topFreeArea">

                </div>
                <div className="masterCard-bottomContentArea ps-4 pt-3">
                    <div>
                        <span className="masterCard-authorName">{props.data.AuthorName} ● {props.data.Date}</span>
                    </div>
                    <div className="mt-2">
                        <span className="masterCard-titleName">{props.data.Title}</span>
                    </div>
                    <div className="mt-1">
                        <span className="masterCard-titleDescription">{props.data.Description}</span>
                    </div>
                    <div className="d-flex mt-3">
                        {
                            tags === null ? null :
                            tags.map((tag) =>{
                                return(
                                    <div className="masterCard-tagsContainer me-2">
                                        <span className="masterCard-postTags mx-3">{tag}</span>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MasterCardComponent;