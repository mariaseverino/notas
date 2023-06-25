import { Observable } from 'rxjs';
import { Note } from './note.entity';

export abstract class NoteRepository {
  abstract getAll(): Observable<Note[]>;
  abstract getById(id: number): Observable<Note>;
  abstract save(note: Note): void;
  abstract delete(id: number): Observable<Object>;
  abstract update(note: Note): void;
}
