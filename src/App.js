// Import data
import {postings} from './postings.js'
// Import components
import './App.css';
import Gallery from './Gallery.js'
import Directory from './Directory.js'
import SearchBar from './SearchBar.js'
import Sidebar from './Sidebar.js'

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Sidebar/>
        <SearchBar/>
        <Directory/>
        <Gallery postings = {postings}/>
      </div>
    </div>
  );
}

export default App;
