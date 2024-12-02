import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Genres, Movies } from '../../models/movies.model';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-detailed',
  imports: [],
  templateUrl: './detailed.component.html',
})
export class DetailedComponent<T> implements OnInit {
 
  content: Partial<Movies>={};
  contentCategory:string|null;
  contentId:string|null;
  baseImg:string = environment.baseImgUrl;


  constructor(private moviesSevice:MoviesService, route:ActivatedRoute){
    this.contentCategory = route.snapshot.paramMap.get("category");
    this.contentId = route.snapshot.paramMap.get("id");
  }
  
  getById(){
    if(!this.contentCategory||!this.contentId)return 
    this.moviesSevice.getById(this.contentId).subscribe(response=>{
      this.content = response;
    })
  }
  extractYear(releaseDate:string):number{
    const date = new Date(releaseDate);
    return date.getFullYear();
  }
  formatTime(time:number){
    const hours= (time/60).toFixed();
    const mins = time%60;
    if(mins>0)return `${hours} h ${mins} min`;
    else return `${hours} h`
  }
  getGenres(genres:Array<Genres>):string{
    let listGenres= ''
    genres.forEach(genre=>{
      listGenres = `${listGenres} | ${genre.name}`
    })
    return listGenres
  }
  ngOnInit(): void {
      this.getById();
  }
}
