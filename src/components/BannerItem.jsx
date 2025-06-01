import {Link} from "react-router-dom";

const BannerItem = ({src, alt}) => {
    return (
        <img src={src ?? ""} alt={alt ?? "image"}/>
    )
}
export default BannerItem;