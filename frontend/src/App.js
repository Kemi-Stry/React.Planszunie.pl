import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import Button from './components/Button';
import useFetch from './hooks/useFetch';


function App() {
  
const { loading, error, data } = useFetch('http://localhost:1337/api/games/2')
console.log(data)

if (loading) return <p>Ładowanko...</p>
if (error) return <p>Error :(</p>

  return (
    <div className="App">
        <div>
          <h1>{data.title}</h1>
        </div>
    </div>
  );
}

export default App;
