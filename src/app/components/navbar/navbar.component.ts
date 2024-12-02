import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  imports: [MenubarModule, CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  itemsFav:MenuItem[] | undefined;
  logoUrl:string ='/assets/popcorn.png';
  ngOnInit(): void {
    this.items = [
      {
        label: 'Movies',
        icon: 'pi pi-ticket',
        routerLink: ['/movies'],
        title: 'movies',
      },
      {
        label: 'Series',
        icon: 'pi pi-video',
        routerLink: ['/series'],
        title: 'series',
      },
    ];
    this.itemsFav=[
      {
        icon: 'pi pi-heart-fill',
        routerLink: ['/favorites'],
        routerLinkActive:'fill text-red-700'
      }
    ]
  }
  
}
