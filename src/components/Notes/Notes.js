import "./Notes.css";
import Note from "./Note"; 

const Notes = (props) =>{
	console.log(props.notes[0], "props")
	// destructuring 
	const { notes } = props;
	console.log(notes);

  return (
		<div className="notes">
			<Note id={props.notes[0]} title={props.notes[0].title} text={props.notes[0].text} />
			<Note id={props.notes[1]} title={props.notes[1].title} text={props.notes[1].text}/>
			<Note id={props.notes[2]} title={props.notes[2].title} text={props.notes[2].text}/>
			<Note id={props.notes[3]} title={props.notes[3].title} text={props.notes[3].text}/>
		</div>
  )
}

export default Notes;