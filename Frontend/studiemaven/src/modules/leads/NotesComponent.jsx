import React, { useEffect, useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { InputTextarea } from "primereact/inputtextarea";
import { getNotes, addNote } from "./leadServices";
import moment from "moment";
const NotesComponent = ({ LeadId }) => {
  let notes = {}
  const [visible, setVisible] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [notesData, setNotesData] = useState(notes);
  const [noteText, setNoteText] = useState(null)
  const getNotesData = () => {
    getNotes({ lead_id: LeadId }).then((res) => {
      console.log(res, 'the respo');
      if (res?.data?.data?.length) {
        setNotesData(res.data.data)
      }
    })
  }
  useEffect(() => {
    visible && getNotesData();
  }, [visible])
  // console.log(noteText,'noteText');
  const NotesContent = ({ note }) => {
    let author = note.FirstName + ' '
      + note.LastName
    return (<>
      <div style={{
        textAlign: 'end',
        marginBottom: '10px',
        fontWeight: '700'
      }}><span>{author}<span className="blue">{`(${moment(note.CreatedDate).format('MMMM Do YYYY, h:mm:ss a')})`}</span></span></div>
      <p>{note.NoteContent}</p>
      <Divider />
    </>)
  }
  const onAddNote = () => {
    addNote({
      note_content: noteText,
      lead_id: LeadId,
      note_title: ''

    }).then((res) => {
      if (res?.data?.success) {
        getNotesData();
        setNoteText(null);
        setShowEditor(false);
      }
    })
  }
  const footerContent = () => (
    <div style={{ textAlign: 'left', marginTop: '10px' }}>
      {!showEditor && <Button style={{ marginRight: '5px' }} severity="success" label="Add Note" onClick={() => setShowEditor(true)} />}
      {showEditor && <Button style={{ marginRight: '5px' }} severity="success" label="Update" onClick={onAddNote} />}
      <Button severity="danger" label="Cancel" onClick={() => setVisible(false)} />
    </div>
  );
  return (<>
    <span title="Notes" onClick={() => setVisible(true)} className={`pi pi-comment`} ></span>
    <Dialog header="Notes" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
      {notesData.length ?
        <>
          <Divider />
          {notesData.map((item, i) => <NotesContent note={item} key={i} />)}
        </> : <>{showEditor ? '' : ' No notes avilable'}</>}
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