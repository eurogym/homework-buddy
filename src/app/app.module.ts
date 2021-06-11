import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodoListComponent } from './todo-list/todo-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {GruppeComponent} from './gruppe/gruppe.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { TodoFilterPipePipe } from './pipes/todo-filter-pipe.pipe';

import {MatTableModule, _MatTableDataSource} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FaecherComponent } from './add-faecher/addFaecher.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import {MatIconModule} from '@angular/material/icon';
import {NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { GroupFilterPipe } from './pipes/group-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    DashboardComponent,
    TodoFilterPipePipe,
    GruppeComponent,
    FaecherComponent,
    GroupFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    NoopAnimationsModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatToolbarModule,
    MatGridListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[TodoListComponent]
})
export class AppModule {

}
