import React from "react";
import Hello from "./components/Hello";

export default class App extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center', fontSize: '30px'}}>
                Welcome to React!
                <Hello />
            </div>
        );
    }
}