import "./Navigation.css";
import Mylogo from "../../assets/hero.png"
function Navigation(props){

    props.fromchild("James from Navigation");

    return <>
                <nav><img src={Mylogo} />{props.appname}</nav>
            </>

}

export default Navigation;