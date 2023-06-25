import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Note } from '../entities/note.entity';
import { FakeApiRepository } from '../repositories/fake-api.repository';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  notes: Note[] = [];
  constructor(private repo: FakeApiRepository) {}

  loadNotes(): Observable<Note[]> {
    return this.repo.getAll();
  }

  getNote(id: number): Observable<Note> {
    return this.repo.getById(id);
  }

  saveNote(note: Note): Observable<Object> {
    return this.repo.save(note);
  }

  updateNote(note: Note): Observable<Object> {
    return this.repo.update(note);
  }

  deleteNote(id: number): Observable<Object> {
    return this.repo.delete(id);
  }
}
