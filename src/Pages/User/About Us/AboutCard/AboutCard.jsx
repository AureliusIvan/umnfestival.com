import "./AboutCard.scss"
import CoolTitle from "../../../../Reusable/ComponentItems/CoolTitle/CoolTitle";

export default function AboutCard(props) {
    return (
        <div className='About-Card'>
            <img src={props.logo} alt="event logo" className="Image" />
            <div className='Title'>
                <CoolTitle>
                    {props.title}
                </CoolTitle>
            </div>
            <div className='Desc'>
                <span className="quo">&ldquo;</span>
                {props.desc}
                <span className="quo">&rdquo;</span>
            </div>
        </div>
    )
}
