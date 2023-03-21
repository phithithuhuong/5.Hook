import useClock from "../hooks/useClock";
import "./Clock.css";
import {Button} from "react-bootstrap";

function MyClock() {
    //Gọi custom hook để sử dụng
    const [time, ampm] = useClock();
    return (
        <div id="Clock-style">
          <center><Button id="btn"  variant="dark"> {time} {ampm}</Button></center>
        </div>
    );
}
export default MyClock;