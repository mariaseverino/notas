import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Note } from 'src/app/entities/note.entity';
import { NotesService } from 'src/app/services/notes.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  notes!: Observable<Note[]>;
  faTrash = faTrash;

  constructor(private service: NotesService) {}

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    this.notes = this.service.loadNotes();
  }

  onDelete(id: number) {
    this.service.deleteNote(id).subscribe(() => this.getNotes());
  }
}
