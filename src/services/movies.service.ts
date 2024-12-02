import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment.development";
import { Pagination } from "../models/pagination.model";
import { Movies } from "../models/movies.model";

@Injectable({
    providedIn:'root'
})
export class MoviesService{
    private url = environment.api;
    constructor(private httpClient:HttpClient){
        
    }
    getAll(){
       const endPoint ='discover/movie';
       return this.httpClient.get<Pagination<Movies>>(this.url+ endPoint);
    }
    getById(id:string){
        const endPoint = 'movie/';
        return this.httpClient.get<Movies>(this.url+endPoint+id);
    }
    getAllHighlighted(){
        const endPoint = 'movie/popular';
        return this.httpClient.get<Pagination<Movies>>(this.url+endPoint);
    }
}