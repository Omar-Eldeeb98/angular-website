import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  imgSrc: string[] = [
    'assets/images/poert1.png',
    'assets/images/port2.png',
    'assets/images/port3.png',
  ];

  img1Flag: boolean = false;
  img2Flag: boolean = false;
  img3Flag: boolean = false;

  showModel1() {
    this.img1Flag = true;
  }
  showModel2() {
    this.img2Flag = true;
  }
  showModel3() {
    this.img3Flag = true;
  }

  closeModel() {
    this.img1Flag = false;
    this.img2Flag = false;
    this.img3Flag = false;
  }

  backimg1() {
    this.img1Flag = false;
    this.img3Flag = true;
  }

  forwardimg1() {
    this.img1Flag = false;
    this.img2Flag = true;
  }

  backimg2() {
    this.img2Flag = false;
    this.img1Flag = true;
  }
  forwardimg2() {
    this.img2Flag = false;
    this.img3Flag = true;
  }
  backimg3() {
    this.img3Flag = false;
    this.img2Flag = true;
  }
  forwardimg3() {
    this.img3Flag = false;
    this.img1Flag = true;
  }
}
