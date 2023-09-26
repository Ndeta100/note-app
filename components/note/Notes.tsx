import {getNotes} from "@/utils/api";
import {useEffect, useState} from "react";
import Note from "@/types/noteWrapper";
import NoteCard from "@/components/note/NoteCard";
interface NotesListProps {
    notes: Note[];
}
export const Notes: React.FC<NotesListProps> = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [loading, setLoading]=useState(true)
    useEffect(()=>{
        const apiCall=async ()=>{
            try {
                const notesApi= await getNotes()
                console.log(notesApi)
                setNotes(notesApi.notes);
                setLoading(false)
            }catch (error){
                console.log('Error fetching data', error)
            }

        }
        apiCall()
    },[])


    return (
        <div>
            {/*<h1>Your Notes</h1>*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {notes.map((note) => (
                    <NoteCard key={note.id} note={note} />
                ))}
            </div>
        </div>
    );
};
