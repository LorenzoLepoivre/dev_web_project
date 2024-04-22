import { useParams } from "react-router-dom";
import HeaderDetail from '../Layout/HeaderDetail'

function Detail() {
    const { id } = useParams();
    return(
    <div>
        <HeaderDetail/>
        <h1>Detail {id}</h1>;
    </div>);
    }

export default Detail;