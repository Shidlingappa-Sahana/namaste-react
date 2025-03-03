/**
 * 
 * <div id="root">
 *    <div id="parent">
 *      <div id="child1">
 *         <h1>Hello from h1 tag</h1>
 *      </div>
 *    </div>
 * <div id="parent2">
 *      <div id="child2">
 *         <h1>Hello from h1 tag</h1>
 *      </div>
 *    </div>
 * </div>
 * 
 */



const heading = React.createElement("div", {id:"parent"}, [React.createElement("div", {id:"child1"}, 
    [React.createElement("h1", {}, "Hello from h1"), React.createElement("h2", {}, "Hello from h2")]),
    React.createElement("div", {id:"child2"}, 
    [React.createElement("h1", {}, "Hello from h1"), React.createElement("h2", {}, "Hello from h2")])])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)