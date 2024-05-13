import React from "react";

const HeiwaIcon = (props)=>{
const {
    height, 
    icon,
    width, 
    ...rest
    } = props;

    return(
        <img 
        src={icon}
        height={height}
        width={width}
        {...rest}
        />
    )
}

export default HeiwaIcon;