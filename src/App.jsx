import Header from './components/layout/header.jsx'; //importing the Header component from the specified path
import './App.css'; // importing the CSS file for styling the App component

function App() {
  return (
    <div className="App">
      <Header title="OS Study Board" /> {/* Using the Header component and passing the title prop */}
      {/* Other components and content can be added here */}
    
      <main> 
        <h2>Study Topics</h2>
        <p>study topics will appear here </p>
      </main>
    </div>
  );
}


export default App;
