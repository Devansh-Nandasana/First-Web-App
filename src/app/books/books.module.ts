import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BooksComponent } from './books.component';
import { TileComponent } from './tile/tile.component';

@NgModule({
  imports: [BrowserModule],
  exports: [BooksComponent],
  declarations: [BooksComponent, TileComponent]
})
export class BooksModule {}
