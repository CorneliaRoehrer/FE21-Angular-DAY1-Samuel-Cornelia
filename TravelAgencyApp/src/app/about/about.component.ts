import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  AboutHeading:string;

 
  constructor() { 

    this.AboutHeading = "Why we are the best"
  }

  ngOnInit(): void {
  }

}
