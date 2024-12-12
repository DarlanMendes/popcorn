import { Component, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { Series } from '../../models/series.model';
import { QueryParams } from '../../models/query.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-series',
  imports: [CommonModule],
  templateUrl: './series.component.html',
})
export class SeriesComponent implements OnInit {

  series:Series[] = [];
  params: QueryParams = new QueryParams();

  constructor(private seriesService: SeriesService) {
  }

  getAllSeries() {
    this.seriesService.getAll().subscribe((res) => {
      this.series = res.results;
      this.params.page = res.page;
      this.params.total_pages = res.total_pages;

    })
  }

ngOnInit(): void {
  this.getAllSeries();
}
}
