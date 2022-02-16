import { Component, OnInit } from '@angular/core';
import { ToyServiceService } from 'src/app/toy-service.service';
@Component({
  selector: 'app-toy-filters',
  templateUrl: './toy-filters.component.html',
  styleUrls: ['./toy-filters.component.css']
})
export class ToyFiltersComponent implements OnInit {

  constructor(public toyService: ToyServiceService) { }

  ngOnInit(): void {
  }

}
