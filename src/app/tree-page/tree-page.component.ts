import { CdkDragDrop, CdkDragMove } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DraggableToy, Toy } from '../interfaces';
import { ToyServiceService } from '../toy-service.service';

@Component({
  selector: 'app-tree-page',
  templateUrl: './tree-page.component.html',
  styleUrls: ['./tree-page.component.css'],
})
export class TreePageComponent implements OnInit {
  @ViewChild('dropZone', { read: ElementRef, static: true })
  dropZone!: ElementRef;
  mockArr: undefined[];
  decorMockArr: (undefined | number)[][];
  constructor(public toyService: ToyServiceService) {
    this.mockArr = new Array(40);
    this.decorMockArr = new Array(8).fill(0).map((e, idx) => {
      let num = idx + 1 * 4 + 3 * idx;

      return new Array(num).fill(0).map((el, idx, array) => {
        return idx < Math.ceil(array.length / 2) ? idx : array.length - 1 - idx;
      });
    });
  }

  ngOnInit(): void {
  }
  animateSnow() {
    const timingFunctions = ['ease-in', 'ease-out', 'linear', 'ease-in-out'];
    document.querySelectorAll('.snowflake').forEach((snowflake) => {
      snowflake.animate(
        [
          { transform: `translateY(-120px)` },
          { transform: `translateY(1020px)` },
        ],
        {
          duration: (Math.floor(Math.random() * (9 - 3)) + 3) * 1000,
          delay: Math.floor(Math.random() * 3) * 1000,
          easing: timingFunctions[Math.floor(Math.random() * 3)],
          iterations: Infinity,
        }
      );
    });
  }
  styleBulb(bulb: number | undefined) {
    return {
      'marginTop.px': `${(bulb as number) * 5 * 0.56}`,
      'background-color': `${this.toyService.treeSettings.lightsColor}`,
      animation: `3s ease-in-out 0s infinite normal none running ${this.toyService.treeSettings.lightsAnim}`,
    };
  }
  treeDrop(event: CdkDragDrop<DraggableToy[]>) {
    if (event.previousContainer !== event.container) {
      const toy = this.toyService.selectedToys[event.previousIndex];
      if (Number(toy.count) > 0) {
        const clone = JSON.parse(
          JSON.stringify(event.previousContainer.data[event.previousIndex])
        );
        event.container.data.splice(event.currentIndex, 0, clone);
        toy.count = `${Number(toy.count) - 1}`;

        this.toyService.toysOnTree[event.currentIndex].pos.y =
          event.dropPoint.y + 'px';
        this.toyService.toysOnTree[event.currentIndex].pos.x =
          event.dropPoint.x + 'px';
      }
    }
  }

  boxDrop(event: CdkDragDrop<Array<DraggableToy | Toy>>) {
    const item = this.toyService.toysOnTree[event.previousIndex];
    const box = this.toyService.selectedToys.find((el) => {
      return el.num === item.num;
    }) as DraggableToy;
    box.count = `${Number(box.count) + 1}`;
    this.toyService.toysOnTree = this.toyService.toysOnTree.filter(
      (el) => el.num !== item.num
    );
  }
  moved(event: Event | CdkDragMove) {
    this.toyService.draggedPos = (event as CdkDragMove).pointerPosition;
  }
  changePosition(event: CdkDragDrop<DraggableToy>, toy: DraggableToy) {
    const rectZone = this.dropZone.nativeElement.getBoundingClientRect();


    let y = event.dropPoint.y;
    let x = event.dropPoint.x;
    if (
      x >= rectZone.left &&
      x <= rectZone.right &&
      y <= rectZone.bottom &&
      y >= rectZone.top
    ) {
      toy.pos.y = y + 'px';
      toy.pos.x = x + 'px';
    } else {
      const box = this.toyService.selectedToys.find((el) => {
        return el.num === toy.num;
      }) as DraggableToy;
      box.count = `${Number(box.count) + 1}`;
      this.toyService.toysOnTree = this.toyService.toysOnTree.filter(
        (el) =>
          !(
            el.num === toy.num &&
            el.count === toy.count &&
            el.pos.x === toy.pos.x
          )
      );
    }
  }
}
