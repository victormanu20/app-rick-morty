import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TaskListComponent } from './presentation/components/task-list/task-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { characterReducer } from './core/states/app.reducer';
import { HomeComponent } from './presentation/home/home.component';
import { CardCharacterComponent } from './presentation/components/card-character/card-character.component';
import { ErrorInterceptor } from './core/interceptors/http-interceptors';
import { CharacterModalComponent } from './presentation/components/character-modal/character-modal.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    HomeComponent,
    CardCharacterComponent,
    CharacterModalComponent
  ],
  imports: [
    StoreModule.forRoot({ selectedCharacter : characterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: true, // Restrict extension to log-only mode
    }),

    BrowserModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
