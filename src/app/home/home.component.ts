import { Component, OnInit } from '@angular/core';
import { CardContainerComponent } from "../components/card-container/card-container.component";
import { Movies } from '../../models/movies.model';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  imports: [CardContainerComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  highlightedMovies:Array<Movies>=[]
  constructor(
    private moviesService: MoviesService
  ){}
  ngOnInit(): void {
      this.moviesService.getAllHighlighted().subscribe(response=>{
        this.highlightedMovies = response.results;
      })
  }
}
