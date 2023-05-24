import "../Styles/Components/ChildCardComponent.css";
import arrow from '../Assets/Images/arrow_right.png';

function ChildCardComponent(props){

    const tags = props.data.Tags.split(",");

    return(
        <div className="container childCard-container">
            <img className="childCard-image" src={props.data.Image_URL} />
            <div className="childCard-content pt-3">
                <div>
                    <span className="childCard-authorName">{props.data.AuthorName} ● {props.data.Date}</span>
                </div>
                <div className="mt-2 d-flex align-items-center justify-content-between">
                    <span className="childCard-titleName">{props.data.Title}</span>
                    <img className="me-3 childCard-arrowImage" src={arrow}/>
                </div>
                <div className="mt-1">
                    <span className="childCard-titleDescription">{props.data.Description}</span>
                </div>
                <div className="childCard-tags mt-3">
                {
                    tags === null ? null :
                    tags.map((tag) =>{
                        return(
                            <div className="childCard-tagsContainer d-flex align-items-center justify-content-center my-1">
                                <span className="childCard-postTags mx-3">{tag}</span>
                            </div>
                        );
                    })
                }
                </div>
            </div>
        </div>
    );
}

export default ChildCardComponent;