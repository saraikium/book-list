import { Injectable } from "@angular/core";
import {
  AngularFirestoreCollection,
  AngularFirestore
} from "@angular/fire/firestore";
import { Book } from "../models/book";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BookService {
  books: Observable<Book[]>;
  booksCollection: AngularFirestoreCollection<Book>;

  constructor(public afs: AngularFirestore) {
    this.books = this.afs.collection("books").valueChanges();
  }

  getBooks() {
    return this.books;
  }
}
