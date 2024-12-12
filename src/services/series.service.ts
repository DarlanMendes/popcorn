import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment.development";
import { Pagination } from "../models/pagination.model";
import { Series } from "../models/series.model";

@Injectable({
    providedIn:'root'
})
export class SeriesService{
    private url = environment.api;
    constructor(private httpClient:HttpClient){

    }
    getAll(){
        const endPoint ='discover/tv';
        return this.httpClient.get<Pagination<Series>>(this.url+ endPoint);
    }
    getByid(id:string) {
        const endPoint = 'tv/';
        return this.httpClient.get<Series>(this.url+endPoint+id);
    }
    getAllHighlighted(){
        const endPoint = 'tv/popular';
        return this.httpClient.get<Pagination<Series>>(this.url+endPoint);
    }
}
