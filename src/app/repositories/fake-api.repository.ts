import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';

import { api } from '../api';
import { Note } from '../entities/note.entity';
import { NoteRepository } from '../entities/notes.repository';

export class FakeApiRepository extends NoteRepository {
  constructor(private http: HttpClient) {
    super();
  }

  getAll(): Observable<Note[]> {
    return this.http.get<Note[]>(api).pipe(take(1));
  }

  getById(id: number): Observable<Note> {
    return this.http.get<Note>(`${api}/${id}`).pipe(take(1));
  }
  save(note: Note): Observable<Object> {
    return this.http.post(api, note).pipe(take(1));
  }
  update(note: Note): Observable<Object> {
    return this.http.put(`${api}/${note.id}`, note).pipe(take(1));
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(`${api}/${id}`).pipe(take(1));
  }
}
