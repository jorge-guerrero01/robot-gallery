import "./App.css";
import { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState(""); //[value, setValue]
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLocaleLowerCase().includes(searchField);
  });

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Simple Robot Gallery</h1>
      <h2 className="subtitle">yup, that's it</h2>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={"search robots"}
        className="search-box"
      />
      <CardList robots={filteredRobots} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       robots: [],
//       searchField: "",
//     };
//   }

// componentDidMount() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) =>
//       this.setState(
//         () => {
//           return { robots: users };
//         },
//         () => {}
//       )
//     );
// }

// onSearchChange = (event) => {
//   const searchField = event.target.value.toLocaleLowerCase();

//   this.setState(() => {
//     return { searchField };
//   });
// };

//   render() {
//     const { robots, searchField } = this.state;
//     const { onSearchChange } = this;
// const filteredRobots = robots.filter((robot) => {
//   return robot.name.toLocaleLowerCase().includes(searchField);
// });

//     return (
//       <div className="App">
//         <h1 className="app-title">Simple Robot Gallery</h1>
//         <h2 className="subtitle">yup, that's it</h2>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder={"search robots"}
//           className="search-box"
//         />
//         <CardList robots={filteredRobots} />
//       </div>
//     );
//   }
// }

export default App;
