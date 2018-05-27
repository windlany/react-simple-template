import React from "react";
import "../assets/css/hello.css";

// 页面中的图片都放在  localhost:3000/images/图片名

export default class Hello extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}> 
                <img src="images/logo.jpg" /> 
                <div className="bgImg"></div>
            </div>
        );
    }
}