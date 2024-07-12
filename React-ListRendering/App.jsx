import List from "./List.jsx";
function App() {
  //passing list as props
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coco", calories: 159 },
    { id: 5, name: "pine", calories: 37 },
  ];
  const vegetables = [
    { id: 6, name: "potato", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 105 },
    { id: 9, name: "corn", calories: 25 },
    { id: 10, name: "brinjal", calories: 63 },
  ];
  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="fruits" />}
      {vegetables.length > 0 && (
        <List items={vegetables} category="Vegetables" />
      )}
    </>
  );
}

export default App;
