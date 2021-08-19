import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Go Loona! Orbit Achieved :-)';
  image1 = 'https://pbs.twimg.com/media/E36dOk_VkAA7wD8.jpg';
  image2 = 'https://pbs.twimg.com/media/E36YjWWVEAAavZ0.jpg';
  image3 = 'https://pbs.twimg.com/media/E36YbkwVoAAA2CK.jpg';

  constructor() { }

  ngOnInit() {
  }

}