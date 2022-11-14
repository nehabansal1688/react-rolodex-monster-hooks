import React, { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list-component';
import SearchBox from './components/search-box/search-box.component';
import './style.css';

const App = () => {
  const [searchString, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredList, setFilteredList] = useState(monsters);

  const handleSearch = (event) => {
    setSearchField(event.target.value.toLowerCase());
  };

  console.log('rendered');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((Response) => Response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newfilteredValues = monsters.filter((val) =>
      val.name.toLowerCase().includes(searchString)
    );
    setFilteredList(newfilteredValues);
  }, [monsters, searchString]);

  return (
    <React.Fragment>
      <h1 className="app-title">Monsters Rolodex </h1>
      <SearchBox
        handleSearch={handleSearch}
        placeholder="search monsters"
        className="search-box"
      />
      <CardList monsters={filteredList} />
    </React.Fragment>
  );
};

export default App;
