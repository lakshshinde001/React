
const object = {
    type : "a",
    props : {
        "href" : "https://google.com",
        "target" : "_blank"
    },
    children : "Click me to visit google"
}

const rootElement = document.getElementById("root");

createElement(rootElement, object);

function createElement (rootElement, object){
    const Element = document.createElement(object.type);
    Element.innerHTML = object.children;
    Element.setAttribute("href", object.props.href);
    Element.setAttribute("target", object.props.target);

    rootElement.appendChild(Element);
}