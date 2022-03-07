import { Component, OnInit } from '@angular/core';
import { ToyServiceService } from '../toy-service.service';

@Component({
  selector: 'app-tree-page',
  templateUrl: './tree-page.component.html',
  styleUrls: ['./tree-page.component.css'],
})
export class TreePageComponent implements OnInit {
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

console.log(bulb)
      return {
        'marginTop.px': `${(bulb as number) * 5 * 0.56
        }`,
        'background-color': `${this.toyService.treeSettings.lightsColor}`,
        animation: `3s ease-in-out 0s infinite normal none running ${this.toyService.treeSettings.lightsAnim}`,
      };

  }
}
