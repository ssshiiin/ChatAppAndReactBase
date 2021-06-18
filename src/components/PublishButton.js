const Publishbutton = (props) => {
    return (
    <button onClick = {() => props.onClick()}>公開状態 : {props.ispublished.toString()}</button>)
}

export default Publishbutton;