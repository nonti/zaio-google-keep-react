import React, {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Form from './components/Form/Form';
import Notes from './components/Notes/Notes';
import Modal from './components/Modal/Modal';


const NOTES = []

const App = () => {
  const [notes, setNotes] = useState(NOTES);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addNote = (note) => {
    //change to  stateful list
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter(note => id !== note.id);
    });
  };
  
  const toggleModal = () => {
    setIsModalOpen(prevState => {
      return !prevState
    });
  }
  return (
    <div>
      <Navbar />
      <Sidebar />
      {/* passing a reference */}
      <Form addNote={addNote} />
      <Notes
        notes={notes}
        deleteNote={deleteNote}
        toggleModal={toggleModal}
      />
      {
        isModalOpen && (
          <Modal isModalOpen={isModalOpen} />
        )
      }
      
    </div>
  );
};


export default App;
