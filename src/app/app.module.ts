import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { BooksComponent } from './books/books.component';
import { BooksModule } from './books/books.module';
import { AssetService } from './service/asset.service';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRouterModule } from './app-routing.module';
import { WholeTableComponent } from './whole-table/whole-table.component';

@NgModule({
  imports: [BrowserModule, FormsModule, BooksModule, AppRouterModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    TableComponent,
    FormComponent,
    DashboardComponent,
    WholeTableComponent
  ],
  providers: [AssetService],
  bootstrap: [AppComponent]
})
export class AppModule {}
