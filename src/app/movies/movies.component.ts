import { Component, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movies } from '../../models/movies.model';
import { QueryParams } from '../../models/query.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-movies',
  imports: [CommonModule],
  templateUrl: './movies.component.html',
 
})
export class MoviesComponent implements OnInit{

  movies:Movies[]  = [];
  params: QueryParams = new QueryParams();

  constructor(private moviesService: MoviesService) {
  }

  getAllMovies() {
    this.moviesService.getAll().subscribe((res) => {
      this.movies =res.results;
      this.params.page = res.page;
      this.params.total_pages = res.total_pages;
    });
  }
  ngOnInit(): void {
      this.getAllMovies();
  }
}
