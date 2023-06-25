import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/entities/note.entity';
import { NotesService } from 'src/app/services/notes.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  myValue: string = '';
  id: number | undefined;
  faArrowLeft = faArrowLeft;

  constructor(
    private route: ActivatedRoute,
    private service: NotesService,
    private router: Router
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    if (this.id) {
      this.service.getNote(this.id).subscribe((note: Note) => {
        this.myValue = note.content;
      });
    }
  }
  onChange(e: any) {
    this.myValue = e.target.value;
  }

  back() {
    if (this.id) {
      this.service
        .updateNote({ id: this.id, content: this.myValue })
        .subscribe(() => this.router.navigate(['/']));
    } else {
      this.service
        .saveNote({ content: this.myValue })
        .subscribe(() => this.router.navigate(['/']));
    }
  }
}
