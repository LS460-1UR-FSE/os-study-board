import StudyItem from "./StudyItem";

function StudyList({ topics, onToggle, onDelete }) { // receives the topics array and the onToggle and onDelete functions as props from the parent component
  return (
   <section>
    <h2>Study Topics</h2>


    {topics.length === 0 ? (<p>No study topics yet.</p>) : (

    <ul className="study-list">
      {topics.map((topic) => ( // each topic in the topics array is mapped to a StudyItem component, passing the topic as a prop
        <StudyItem 
        key={topic.id} 
        topic={topic}
        onToggle={onToggle}
        onDelete={onDelete}
        />
      ))}
    </ul>
    )}
   </section>
  );
}

export default StudyList;
