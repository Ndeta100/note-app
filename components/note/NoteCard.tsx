import React from 'react';
import Note from "@/types/noteWrapper";
//prototyping
// interface Note {
//     id?: number;
//     title: string;
//     description: string;
//     level: string;
// }

interface NoteCardProps {
    note: Note;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-semibold">{note.title}</h2>
            <p className="text-gray-600">{note.description}</p>
            <div className="mt-2">
                <span className="text-sm text-blue-500">Level: {note.level}</span>
            </div>
        </div>
    );
};

export default NoteCard;
