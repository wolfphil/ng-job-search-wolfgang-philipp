import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-tab-menu',
  standalone: true,
  imports: [
      RouterLink,
      RouterLinkActive,
      RouterOutlet
  ],
  templateUrl: './tab-menu.component.html',
  styleUrl: './tab-menu.component.css'
})
export class TabMenuComponent {


  constructor() {}

}
