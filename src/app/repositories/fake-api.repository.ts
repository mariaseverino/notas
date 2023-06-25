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
  save(note: Note) {
    this.http.post(api, note).pipe(take(1)).subscribe();
  }
  update(note: Note) {
    this.http.put(`${api}/${note.id}`, note).pipe(take(1)).subscribe();
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(`${api}/${id}`).pipe(take(1));
  }
}
