import { Component, OnInit } from '@angular/core';
import { ToyServiceService } from '../toy-service.service';

@Component({
  selector: 'app-tree-page',
  templateUrl: './tree-page.component.html',
  styleUrls: ['./tree-page.component.css']
})
export class TreePageComponent implements OnInit {
  mockArr: undefined[]
  constructor(public toyService:ToyServiceService) {
   this.mockArr = new Array(40)
  }

  ngOnInit(): void {
  }
  animateSnow(){
    console.log(this.toyService.treeSettings.snow)
    const timingFunctions = ['ease-in', 'ease-out', 'linear', 'ease-in-out']
    document.querySelectorAll('.snowflake').forEach((snowflake)=>{
      console.log('snowflake')
      snowflake.animate([{ transform: `translateY(-120px)` }, { transform: `translateY(1020px)` }], {
        duration: (Math.floor(Math.random() * (9 - 3)) + 3) * 1000,
        delay: Math.floor(Math.random() * 3) * 1000,
        easing: timingFunctions[Math.floor(Math.random() * 3)],
        iterations: Infinity,
    })
    })
  }
}
