import React, {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Form from './components/Form/Form';
import Notes from './components/Notes/Notes';
import Modal from './components/Modal/Modal';


const NOTES = [
    // { id: "a121", title: "Some title 1", text:"Some text 1"},
    // { id: "a122", title: "Some title 2", text:"Some text 2"},
    // { id: "a122", title: "Some title 2", text:"Some text 2"},
    // { id: "a122", title: "Some title 2", text:"Some text 2"}
]

const App = () => {
  const [notes, setNotes] = useState(NOTES);

  const addNote = (note) => {
    //change to  stateful list
    setNotes((prevNotes) =>  {
      return [...notes, note];
    });

  
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
