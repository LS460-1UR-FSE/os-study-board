

import {useState} from 'react'; // importing the useState hook from React
import Header from './components/layout/header.jsx'; //importing the Header component from the specified path
import './App.css'; // importing the CSS file for styling the App component
import StudyList from './components/dashboard/StudyList.jsx'; // importing the StudyList component from the specified path

function App() {

//topics holds array
// setTopics lets us update the topics array when topics change
const [topics, setTopics] = useState([

  {
    id: 1,
    title: 'Review FCFS and Round Robin Scheduling Algorithms',
    category: 'Scheduling',
    completed: false,
  },
  {
    id: 2,
    title: 'FIFO and LRU Page Replacement Algorithms',
    category: 'Memory Management',
    completed: false,
  },
  {
    id: 3,
    title: 'Mutex Locks and Semaphores in Process Synchronization',
    category: 'Synchronization',
    completed: true,
  },
]);


//create new array and toggle the completed status of the topic with the given id
function toggleTopic(id){
  setTopics((currentTopics) =>
    currentTopics.map((topic) =>
      topic.id === id ? { ...topic, completed: !topic.completed } : topic
    )
  );
}

function deleteTopic(id) {
  setTopics((currentTopics) =>
    currentTopics.filter((topic) => topic.id !== id)
  );
}




  return (
    <div className="App">
      <Header title="OS Study Board" /> {/* Using the Header component and passing the title prop */}
      {/* Other components and content can be added here */}
    
      <main> 
        <StudyList 
          topics={topics}         
          onToggle={toggleTopic}
          onDelete={deleteTopic}
        /> {/* Using the StudyList component and passing the topics state as a prop */}
      </main>
    </div>
  );
}


export default App;
