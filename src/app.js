import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";

// const parent = React.createElement("div",{id: "parent"},
//     React.createElement("div", {id: "child"}, 
//     [React.createElement("h1",{}, "iam a h1 tag"),
//      React.createElement("h2", {} , "i am a h2 tag")]
// ));

// console.log(parent);

// //React element
// const heading = (<h1>Hello it is jsx</h1>);



// // react functional component
// const Title = () => ( <h1>hello it is componenet composition</h1> );
// console.log(<Title/>)

// const HeadingKomponent = () => (
    
//     <div>
//     <Title/>
//     {100 + 300}
//     <h1 className="heading">Hello it is React functional componenet</h1>
//     </div>
// )

// console.log(<HeadingKomponent/>);
        
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(< HeadingKomponent />);








const AppLayout = () => {
    return ( 
        <div className="app">
            < Header />
            < Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< AppLayout />);