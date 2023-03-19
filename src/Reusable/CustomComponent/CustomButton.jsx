import './CustomComponent.scss'

export default function CustomButton(props) {
    return (
        <button className='CustomButton'
            {...props}
            style={{
                ...props.style,
                backgroundColor: props.bgColor ? props.bgColor : '#19be5e',
                outlineColor: props.bgColor ? props.bgColor : '#19be5e',
            }}>
            {props.children}
        </button>
    )
}
