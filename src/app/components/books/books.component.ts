import { Component, OnInit } from "@angular/core";
import { BookService } from "../../services/book.service";
import { Book } from "../../models/book";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.scss"]
})
export class BooksComponent implements OnInit {
  books: Book[];
  constructor(public bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      this.books = books;
    });
  }
}
