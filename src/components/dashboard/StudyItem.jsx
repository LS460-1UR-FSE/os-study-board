function StudyItem({ topic, onToggle, onDelete }) {
  return (
    <li className="study-item">
      <h3>{topic.title}</h3>
      <p>Category: {topic.category}</p>
      <p>Status: {topic.completed ? 'Completed' : 'Not completed'}</p>

      <div className="topic-actions">
        {/* Send this topic's ID to the parent's toggle function. */}
        <button
          type="button"
          aria-pressed={topic.completed}
          onClick={() => onToggle(topic.id)}
        >
          {topic.completed ? 'Mark incomplete' : 'Mark complete'}
        </button>

        {/* Send this topic's ID to the parent's delete function. */}
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