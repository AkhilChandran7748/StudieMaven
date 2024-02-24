import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { InputTextarea } from "primereact/inputtextarea";
const NotesComponent = () => {
  let notes = {}
  const [visible, setVisible] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [notesData, setNotesData] = useState(notes);
  const [noteText, setNoteText] = useState(null)
  // console.log(noteText,'noteText');
  const NotesContent = ({ note }) => {
    return (<>
      <div style={{
        textAlign: 'end',
        marginBottom: '10px',
        fontWeight: '700'
      }}><span>{note.author}<span className="blue">{`(${note.time})`}</span></span></div>
      <p>{note.content}</p>
      <Divider />
    </>)
  }
  const onAddNote = () => {
    noteText && setNotesData([...notesData, {
      author: 'Sreejith',
      time: '12/12/23 12:30 PM',
      content: noteText,
    }])
    setNoteText(null);
    setShowEditor(false);  }
  const footerContent = () => (
    <div style={{ textAlign: 'left' }}>
      {!showEditor && <Button style={{ marginRight: '5px' }} severity="success" label="Add Note" onClick={() => setShowEditor(true)} />}
      {showEditor && <Button style={{ marginRight: '5px' }} severity="success" label="Update" onClick={onAddNote} />}
      <Button severity="danger" label="Cancel" onClick={() => setVisible(false)} />
    </div>
  );
  return (<>
    <span title="Notes" onClick={() => setVisible(true)} className="pi pi-comment" ></span>
    <Dialog header="Notes" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
      {notesData.length ?
        <>
          <Divider />
          {notesData.map((item, i) => <NotesContent note={item} key={i} />)}
        </> : <>No notes avilable</>}
      {showEditor && <div className="">
        <span className="p-float-label">
          <InputTextarea value={noteText} id="note" rows={2} cols={30} autoResize onChange={(e) => setNoteText(e.target.value)} />
          <label htmlFor={"note"}>Notes</label>
        </span>
      </div>}
    </Dialog>
  </>)
}
export default NotesComponent