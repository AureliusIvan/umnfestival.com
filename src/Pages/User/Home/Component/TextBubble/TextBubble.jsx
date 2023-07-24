import bubbleIMG from './../../../../../Asset/Image/OtherIcon/textbubble.png'

export default function TextBubble (props){
    return <>
       <img src={bubbleIMG} alt="" />
       <p>{props.textBubbleContent}</p>
    </>
}