import "./Notes.css";
import Note from "./Note"; 

const Notes = (props) =>{
	console.log(props.notes[0], "props")
	// destructuring 
	const { notes } = props;
	console.log(notes);

  return (
		<div className="notes">
			{
				notes.map((note, index) => <Note key={index} id={note.id} title={note.title} text={note.text} />)
			}
		</div>
  )
}

export default Notes;