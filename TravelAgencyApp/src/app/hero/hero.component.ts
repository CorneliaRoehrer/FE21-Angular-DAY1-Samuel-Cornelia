import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  heroHeading:string;
  heroDescription:string;
  heroButton:string;
  heroButtonUrl:string;

  constructor() { 
    this.heroHeading="Welcome to Winter Tour in Austria";
    this.heroDescription = "We are your ultimate Winter experience Provider!"
    this.heroButton = "Learn more"
    this.heroButtonUrl = "./about"
  }

  ngOnInit(): void {
  }

}

