import { CdkDragMove, CdkDragStart } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { DraggableToy, Toy } from 'src/app/interfaces';
import { ToyServiceService } from 'src/app/toy-service.service';

@Component({
  selector: 'app-toy-box',
  templateUrl: './toy-box.component.html',
  styleUrls: ['./toy-box.component.css'],
})
export class ToyBoxComponent implements OnInit {
  constructor(public toyService: ToyServiceService) {
    this.toyService.selectedToys =
      this.toyService.favs.size > 0
        ? Array.from(this.toyService.favs)
        : this.toyService.toyData.slice(0, 21);
    this.toyService.selectedToys.forEach((toy) => {
      toy.pos = {
        x: '0',
        y: '0',
      };
    });
  }

  ngOnInit(): void {}

  moved(event: Event | CdkDragMove) {
    this.toyService.draggedPos = (event as CdkDragMove).pointerPosition;
  }
}
