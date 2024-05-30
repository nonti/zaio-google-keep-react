import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Form from './components/Form/Form';
import Notes from './components/Notes/Notes';
import Modal from './components/Modal/Modal';

const App = () => {
  const notes = [
    { id: "a121", title: "Some title 1", text:"Some text 1"},
    { id: "a122", title: "Some title 2", text:"Some text 2"},
    { id: "a123", title: "Some title 3", text:"Some text 3"},
    { id: "a124", title: "Some title 4", text:"Some text 4"},
    { id: "a125", title: "Some title 5", text:"Some text 5"},
    { id: "a126", title: "Some title 6", text:"Some text 6"}
  ]

  const addNote = (note) =>{
    notes = [ 
      ...notes, note
    ]

    console.log("notes",notes);
  }
  return (
    <div>
      <Navbar />
      <Sidebar />
      {/* passing a reference */}
      <Form addNote={addNote} />
      <Notes notes={ notes} />
      <Modal />
    </div>
  );
}

export default App;
