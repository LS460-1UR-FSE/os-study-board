import StudyItem from "./StudyItem";

function StudyList({ topics }) {
  return (
   <section>
    <h2>Study Topics</h2>

    <ul className="study-list">
      {topics.map((topic) => ( // each topic in the topics array is mapped to a StudyItem component, passing the topic as a prop
        <StudyItem key={topic.id} topic={topic} />
      ))}
    </ul>
   </section>
  );
}

export default StudyList;
