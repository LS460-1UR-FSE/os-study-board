import {useState} from 'react'; // importing the useState hook from React

function StudyForm({onAdd}) {

    const [title, setTitle] = useState(''); // state for the title input
    const [category, setCategory] = useState('Scheduling'); // state for the category input

    function handleSubmit(event){

        event.preventDefault(); // prevent the default form submission behavior

        if (title.trim() === '') { // check if the title input is empty
            return; 
        } 

        onAdd(title.trim(), category); // call the onAdd function passed as a prop with the title and category values

        setTitle(''); // reset the title input
    }


    return (
        <section className="study-form">
            <h2>Add a New Study Topic</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="topic-title">Title:</label>
                <input
                    id="topic-title"
                    type="text"
                    placeholder="Example: Review deadlock conditions"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    maxLength={150} 
                    required
                />

            <label htmlFor="topic-category">Category</label>
                <select
                    id="topic-category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                >
            <option value="Scheduling">Scheduling</option>
            <option value="Memory Management">Memory Management</option>
            <option value="Synchronization">Synchronization</option>
            <option value="Processes">Processes</option>
            <option value="Deadlocks">Deadlocks</option>
            </select>

        <button type="submit">Add Topic</button>
      </form>
    </section>
    );            
}

export default StudyForm;