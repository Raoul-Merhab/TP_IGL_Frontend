import React from 'react'

const Loader = ({color}) => {
    return (
        <div className="lds-ring" style={{borderColor:`${color?color : "#FFF"} transparent transparent transparent`}}><div></div><div></div><div></div><div></div></div>
    )
}

export default Loader