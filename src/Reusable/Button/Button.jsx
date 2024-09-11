import style from './Button.module.scss'

export default function CustomButton(props) {
  return (
      <button className={style.CustomButton}
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