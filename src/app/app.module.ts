import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskListComponent } from './presentation/components/task-list/task-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { characterReducer } from './core/states/app.reducer';
import { HomeComponent } from './presentation/home/home.component';
import { CardCharacterComponent } from './presentation/components/card-character/card-character.component';
import { ErrorInterceptor } from './core/interceptors/http-interceptors';
import { CharacterModalComponent } from './presentation/components/character-modal/character-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    HomeComponent,
    CardCharacterComponent,
    CharacterModalComponent
  ],
  imports: [
    StoreModule.forRoot({ storeRickAndMory : characterReducer }),
    EffectsModule.forRoot([]), // Configura Effects (si es necesario)

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
