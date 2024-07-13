// click events = interaction when a user clicks on a specific element we can respond to clicks by passing a callback to the onclick event handler.

// React Hook = special function that allows functional components to use React features whitout writing class components (useState,useEffect,useContent,useReducer,useCallbacks and more)

// useState()= A React hook that allows the creation of a stateful variable And a setter function to update its value in the virtual dom. (name,setName)
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
function App() {
  return (
    <>
      <Counter />
    </>
  );
}

export default App;
