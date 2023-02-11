import "./AboutCard.scss"
import Sparkles from "../../../../Reusable/Animation/Sparkle/Sparkle";


export default function AboutCard(props) {
    return (
        <div className='About-Card'>
            <img src={props.logo} alt="event logo" className="Image" />
            <div className='Title'>
                <Sparkles>
                    {props.title}
                </Sparkles>
            </div>
            <div className='Desc'>
                <span className="quo">&ldquo;</span>
                {props.desc}
                <span className="quo">&rdquo;</span>
            </div>
        </div>
    )
}
