function StudyItem({topic}) { // displays the study topic received from the parent component through props
  return (
   <li className="study-item">
      <h3>{topic.title}</h3>
      <p>Category: {topic.category}</p>
      <p>Status: {topic.completed ? 'Completed' : 'In Progress'}</p>
    </li>
  );
}

export default StudyItem;