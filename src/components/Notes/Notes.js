import "./Notes.css";
import Note from "./Note"; 

const Notes = (props) =>{
	// destructuring 
	const { notes } = props;
	
  return (
		<div className="notes">
			{	notes.length === 0 ? (
					<p>Notes you add appear here.</p>
				) : (
					notes.map((note, index) => <Note key={index} id={note.id} title={note.title} text={note.text} />
				))
			} 
		</div>
  )
}

export default Notes;