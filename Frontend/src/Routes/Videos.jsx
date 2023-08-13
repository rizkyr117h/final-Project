import VideoList from "../components/VideoList";
function Videos () {
    return(
    <div>
        <VideoList />
    </div>
    )

}
export default Videos;

// eslint-disable-next-line react-refresh/only-export-components
export async function loader(){
    const response = await fetch('http://localhost:3000/video');
    const resData = await response.json();
    return resData

}