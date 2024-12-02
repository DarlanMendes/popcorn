import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-card-container',
  imports: [CarouselModule],
  templateUrl: './card-container.component.html',

})
export class CardContainerComponent<T> {
  @Input() title:string |undefined;
  @Input() contents:Array<T>=[];
  @Input() category:string='';
  baseImg:string =environment.baseImgUrl;

  constructor(private router:Router, private route:ActivatedRoute){
  }
  goTo(contentId:string){
    this.router.navigate([`/detailed/${this.category}/${contentId}`])
  }
}
