import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  @ViewChild('toggle')
  toogle!: ElementRef;

  @ViewChild('nav')
  nav!: ElementRef;

  public isClicked = false;

  openNav() {
    this.isClicked = !this.isClicked;
    /* this.nav.nativeElement.className.toggle('show-nav');
    this.toogle.nativeElement.className.toggle('moveToggle'); */

    /* this.nav.nativeElement.class.toggle('show-nav');
    this.toogle.nativeElement.class.toggle('moveToggle'); */
  }

  constructor() {}

  ngOnInit(): void {}
}
