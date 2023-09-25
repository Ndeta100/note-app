import {AddNote} from "@/app/add/AddNote";
import {getNotes} from "@/utils/api";

export default function Add() {
  const notes=getNotes()
  return <>
    <AddNote/>
  </>
}