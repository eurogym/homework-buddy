import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { GruppeComponent } from './gruppe/gruppe.component';
import { FaecherComponent} from './add-faecher/addFaecher.component'
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AngularFireAuthGuard] },
  { path: 'Gruppe', component: GruppeComponent, canActivate: [AngularFireAuthGuard] },
  { path: 'fach', component: FaecherComponent, canActivate: [AngularFireAuthGuard] }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
