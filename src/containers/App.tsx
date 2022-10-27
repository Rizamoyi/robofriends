import { useState, useEffect, ChangeEvent } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

import { getData } from '../utils/fetch.data';

import './App.css';

export type Robot = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [robots, setRobots] = useState<Robot[]>([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Robot[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setRobots(users);
    };

    fetchUsers();
  }, []);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return !robots.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default App;
