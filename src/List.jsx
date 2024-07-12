import PropTypes from "prop-types";
function List(props) {
  //accessing list items through props
  const category = props.category; //list name
  const itemList = props.items;

  // const fruits = [
  //   { id: 1, name: "apple", calories: 95 },
  //   { id: 2, name: "orange", calories: 45 },
  //   { id: 3, name: "banana", calories: 105 },
  //   { id: 4, name: "coco", calories: 159 },
  //   { id: 5, name: "pine", calories: 37 },
  // ];
  // fruits.sort((a, b) => a.name.localeCompare(b.name)); for reverse change positions of a & b;
  // fruits.sort((a, b) => a.calories - b.calories); // asc
  // fruits.sort((a, b) => b.calories - a.calories); // desc
  // fruits.sort((a, b) => a.name.localeCompare(b.name)); for reverse change positions of a & b;
  // fruits.sort((a, b) => a.calories - b.calories); // asc
  // fruits.sort((a, b) => b.calories - a.calories); // desc

  //filtering in js
  // const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
  // const highCalFruit = fruits.filter((fruit) => fruit.calories >= 100);
  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: {item.calories}
    </li>
  ));
  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}
List.prototype = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};
List.defaultProps = {
  category: "category",
  items: [],
};
export default List;
