import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WholeTableComponent } from './whole-table/whole-table.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'table',
    component: WholeTableComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {}
