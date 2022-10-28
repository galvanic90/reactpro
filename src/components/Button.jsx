const Button = ({text, action, color}) => {
    return <button onClick={action} style={{background:color}}>{text}</button>
}

export default Button
