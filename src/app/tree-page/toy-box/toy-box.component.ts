import { Component, OnInit } from '@angular/core';
import { Toy } from 'src/app/interfaces';
import { ToyServiceService } from 'src/app/toy-service.service';

@Component({
  selector: 'app-toy-box',
  templateUrl: './toy-box.component.html',
  styleUrls: ['./toy-box.component.css']
})
export class ToyBoxComponent implements OnInit {
  selectedToys: Toy[] 
  constructor(public toyService: ToyServiceService) {
    this.selectedToys = this.toyService.favs.size > 0 ? Array.from(this.toyService.favs) : this.toyService.toyData.slice(0, 21)
   }

  ngOnInit(): void {
  }

}
