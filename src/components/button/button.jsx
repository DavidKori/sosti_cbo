import { color } from "framer-motion";
import "./button.css"

const Button = ({
    onClick, 
    children, 
    disabled=false,
    className,
    width,
    height,
    textColor='var(--pale-black)'
})=> {
    const buttonStyle = {
        width:`${width}`,
        height:`${height}`,
        color:`${textColor}`,



    }
   
    return (
        <button
        onClick={onClick}
        disabled={disabled}
        className={className}
        style={buttonStyle}
        >
         {children}
        </button>
    )
};

export default Button;
