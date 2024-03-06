import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-tab-menu',
  standalone: true,
  imports: [
      CommonModule,
      RouterLink,
      RouterLinkActive,
      RouterOutlet,
      RouterModule
  ],
  templateUrl: './tab-menu.component.html',
  styleUrl: './tab-menu.component.css'
})
export class TabMenuComponent implements OnInit {

  private route: ActivatedRoute = inject(ActivatedRoute);


  constructor() {
  }

  ngOnInit(): void {
    console.log("routes in TabMenuComponent", this.route.toString());
  }
}
