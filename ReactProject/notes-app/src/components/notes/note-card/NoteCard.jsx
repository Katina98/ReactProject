import React from 'react';
import { Link } from 'react-router-dom';
import { getLoggedUser } from '../../../core/api/users.api';
import { NoteStatus } from './../../../core/api/notes.api';
import './NoteCard.css';

const noteCardStyle = {
    maxWidth: '19rem',
};

const deleteBtnStyles = {
    cursor: 'pointer'
};

export function NoteCard({ note, onDeleteClick }) {
    const loggedUser = getLoggedUser();

    let noteClassByType = "cardd text-white m-3 ";
    switch(note.status) {
        case NoteStatus.Active: 
            noteClassByType += "bg-primary";
        break;
        case NoteStatus.Done: 
            noteClassByType += "bg-success";
        break;
        case NoteStatus.Pending:
            noteClassByType += "bg-secondary";
        break;
        default: 
            noteClassByType += "bg-primary";
        break;
    }

    return (
    <div className={noteClassByType} style={noteCardStyle}>
        <div className="card-header">
            {note.title}
            { (loggedUser.isAdmin || loggedUser.id === note.authorId) && <Link to={`/notes/edit/${note.id}`} ><h2 className="card-text-ed">Edit </h2></Link> }
    { (loggedUser.isAdmin || loggedUser.id === note.authorId) && <span style={deleteBtnStyles} onClick={() => onDeleteClick(note.id)}><h2 className="card-text-del">Delete </h2></span> }
        </div>
        <div className="card-body">
            <p className="card-text">{note.content}</p>
        </div>
        <div className="card-footer bg-transparent border-secondary">
            <div><h2 className="note-card">Author: {note.authorName} </h2></div>
            <div><h2 className="note-card">Created on: {note.date} </h2></div>
        </div>

        <div className="space"></div>
    </div>
    )
}