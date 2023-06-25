import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './pages/notes/notes.component';
import { DetailsComponent } from './pages/details/details.component';
import { NotesService } from './services/notes.service';
import { FakeApiRepository } from './repositories/fake-api.repository';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components/button/button.component';

const createService = (http: HttpClient) => {
  return new NotesService(new FakeApiRepository(http));
};
@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    DetailsComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [
    {
      provide: NotesService,
      useFactory: createService,
      deps: [HttpClient],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
