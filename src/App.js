import React, { useState } from "react";
import NavScrollExample from "./components/NavBar";
import Header from "./components/Header";
import Hi from "./components/catgory";
import ItemList from "./components/ItemList";
import { items } from "./data";

function App() {
  const [itemsData, setItemsData] = useState(items)

  //get all cat uniqe
  const allCategory = ['الكل', ...new Set(items.map((i) => i.category))]

  //filter by category
  const filterbyCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items)
    } else {
      const newArr = items.filter((item) => item.category === cat)
      setItemsData(newArr)
    }
  }

  //filter by search form
  const filterbySearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word)
      setItemsData(newArr)
    }
  }
  return (
    <div className="App">
      <NavScrollExample filterbySearch={filterbySearch} />
      <Header/>
      <Hi filterbyCategory={filterbyCategory} allCategory={allCategory} />
      <ItemList itemsData={itemsData}/>
    </div>
  );
}

export default App;
