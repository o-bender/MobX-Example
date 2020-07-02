import store from "../../store";
import React from "react";
import Component from "../Component/Component";
import StateLessComponent from "../StateLessComponent/StateLessComponent";

function App() {
    return (<>
        <React.StrictMode>
            <Component store={store} />
            <StateLessComponent store={store} />
        </React.StrictMode>
    </>);
}

export default App;