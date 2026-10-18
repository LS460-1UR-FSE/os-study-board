function StudyItem({topic}) { // displays the study topic received from the parent component through props
  return (
   <li className="study-item">
      <h3>{topic.title}</h3>
      <p>Category: {topic.category}</p>
      <p>Status: {topic.completed ? 'Completed' : 'In Progress'}</p>

      <div className= 'Topic Actions'>
        <button
            type="button"
            aria-pressed={topic.completed}
            onClick={() => onToggle(topic.id)}
        >
            {topic.completed ? 'Mark as In Progress' : 'Mark as Completed'}
        </button>

        <button
            type="button"
            className="delete-button"
            onClick={() => onDelete(topic.id)}
        >
            Delete
        </button>
     </div>
    </li>
  );
}

export default StudyItem;