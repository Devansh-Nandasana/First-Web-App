import { Component } from '@angular/core';
import { Book } from './asset.model';
@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books: Book[] = [
    {
      imgURL:
        'https://images-na.ssl-images-amazon.com/images/I/91l1Op79AWL.jpg',
      title: 'Title',
      author: 'Author',
      details: 'Details'
    },
    {
      imgURL:
        'https://images-na.ssl-images-amazon.com/images/I/919GZveZJYL.jpg',
      title: 'Title',
      author: 'Author',
      details: 'Details'
    },
    {
      imgURL: 'https://m.media-amazon.com/images/I/417yjF+Z5zL.jpg',
      title: 'Title',
      author: 'Author',
      details: 'Details'
    },
    {
      imgURL:
        'https://images-na.ssl-images-amazon.com/images/I/91l1Op79AWL.jpg',
      title: 'Title',
      author: 'Author',
      details: 'Details'
    },
    {
      imgURL:
        'https://images-na.ssl-images-amazon.com/images/I/919GZveZJYL.jpg',
      title: 'Title',
      author: 'Author',
      details: 'Details'
    },
    {
      imgURL: 'https://m.media-amazon.com/images/I/417yjF+Z5zL.jpg',
      title: 'Title',
      author: 'Author',
      details: 'Details'
    },
    {
      imgURL:
        'https://images-na.ssl-images-amazon.com/images/I/91l1Op79AWL.jpg',
      title: 'Title',
      author: 'Author',
      details: 'Details'
    },
    {
      imgURL:
        'https://images-na.ssl-images-amazon.com/images/I/919GZveZJYL.jpg',
      title: 'Title',
      author: 'Author',
      details: 'Details'
    },
    {
      imgURL: 'https://m.media-amazon.com/images/I/417yjF+Z5zL.jpg',
      title: 'Title',
      author: 'Author',
      details: 'Details'
    },
    {
      imgURL:
        'https://images-na.ssl-images-amazon.com/images/I/91l1Op79AWL.jpg',
      title: 'Title',
      author: 'Author',
      details: 'Details'
    }
  ];
}
