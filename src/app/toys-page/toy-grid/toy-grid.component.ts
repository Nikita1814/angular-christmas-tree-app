import { Component, OnInit } from '@angular/core';
import { Toy } from 'src/app/interfaces';
import { ToyServiceService } from 'src/app/toy-service.service';
@Component({
  selector: 'app-toy-grid',
  templateUrl: './toy-grid.component.html',
  styleUrls: ['./toy-grid.component.css'],
})
export class ToyGridComponent implements OnInit {
  constructor(public toyService: ToyServiceService) {}

  ngOnInit(): void {}
}
