import { CdkDragDrop, copyArrayItem, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DraggableToy } from '../interfaces';
import { ToyServiceService } from '../toy-service.service';

@Component({
  selector: 'app-tree-page',
  templateUrl: './tree-page.component.html',
  styleUrls: ['./tree-page.component.css'],
})
export class TreePageComponent implements OnInit {
  @ViewChild('dropZone',{read:ElementRef,static:true}) dropZone!:ElementRef
  mockArr: undefined[];
  decorMockArr: (undefined | number)[][];
  constructor(public toyService: ToyServiceService) {
    this.mockArr = new Array(40);
    this.decorMockArr = new Array(8).fill(0).map((e, idx) => {
      let num = (idx + 1 * 4) + 3 * idx;

      return new Array(num).fill(0).map((el, idx, array) =>{
        return idx <  Math.ceil((array.length / 2) ) ? idx  : (array.length - 1 ) - idx
      });
    });
  }

  ngOnInit(): void {
    console.log(this.decorMockArr)
  }
  animateSnow() {
    console.log(this.toyService.treeSettings.snow);
    const timingFunctions = ['ease-in', 'ease-out', 'linear', 'ease-in-out'];
    document.querySelectorAll('.snowflake').forEach((snowflake) => {
      console.log('snowflake');
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
  styleBulb(bulb: number | undefined) { //ropeIdx: number, bulbIdx: number

      return {
        'marginTop.px': `${(bulb as number) * 5 * 0.56
        }`,
        'background-color': `${this.toyService.treeSettings.lightsColor}`,
        animation: `3s ease-in-out 0s infinite normal none running ${this.toyService.treeSettings.lightsAnim}`,
      };

  }
  treeDrop(event: CdkDragDrop<DraggableToy[]>){
    console.log('i Work')
   const toy = this.toyService.selectedToys[event.previousIndex]
   if(Number(toy.count) > 0){
    console.log(event)
    const clone = JSON.parse(JSON.stringify(event.previousContainer.data[event.previousIndex]));
    event.container.data.splice(event.currentIndex, 0, clone);
     /*copyArrayItem(
       event.previousContainer.data,
       event.container.data,
       event.previousIndex,
       event.currentIndex
     )*/
     toy.count = `${Number(toy.count) - 1}`
     console.log(this.toyService.toysOnTree);
   } else if (
    (Number(toy.count) < 1)){
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
      console.log(this.toyService.toysOnTree)
    }
    this.toyService.toysOnTree[event.currentIndex].pos.y =  /*this.dropZone.nativeElement.getBoundingClientRect().top-*/ event.dropPoint.y  + "px"
    this.toyService.toysOnTree[event.currentIndex].pos.x = /*this.dropZone.nativeElement.getBoundingClientRect().left -*/ event.dropPoint.x   + "px"
  }
}
