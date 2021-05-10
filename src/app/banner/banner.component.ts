import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[] = [
    '../../assets/images/carHippie.webp',
    '../../assets/images/flowerKind.webp',
    '../../assets/images/hikedelic.webp'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
