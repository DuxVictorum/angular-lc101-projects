import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  title: string = "Web Links"
  favLinks: string[] = ["www.espn.com", "www.etymonline.com", "news.google.com"];

  constructor() { }

  ngOnInit() {
  }

}
