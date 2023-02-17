import './CustomComponent.scss'

export default function CustomButton(props) {
    return (
        <button className='CustomButton'
            {...props}
        >
            {props.children}
        </button>
    )
}
