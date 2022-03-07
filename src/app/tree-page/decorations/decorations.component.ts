import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToyServiceService } from 'src/app/toy-service.service';

@Component({
  selector: 'app-decorations',
  templateUrl: './decorations.component.html',
  styleUrls: ['./decorations.component.css']
})
export class DecorationsComponent implements OnInit {
  @Output("animateSnow") animateSnow: EventEmitter<void> = new EventEmitter()

  constructor(public toyService: ToyServiceService) { }

  ngOnInit(): void {
  }
  setBg(bg:string){
    this.toyService.treeSettings.bg = bg
  }
  setTree(tree:string){
    this.toyService.treeSettings.treeImg = tree
  }
  setDecorations(color:string, anim:string){
    console.log('I was Clicked')
    this.toyService.treeSettings.lightsOn === true && this.toyService.treeSettings.lightsColor === color ? this.toyService.treeSettings.lightsOn = false : this.toyService.treeSettings.lightsOn = true;
    this.toyService.treeSettings.lightsColor = color
    this.toyService.treeSettings.lightsAnim = anim
    console.log(this.toyService.treeSettings)
  }
  playMusic(){
    this.toyService.treeSettings.music = ! this.toyService.treeSettings.music
    const jingleBells = (document.querySelector('.jingle-bells') as HTMLAudioElement);
    this.toyService.treeSettings.music ? jingleBells.pause() : jingleBells.play()
  }
  setSnow(){
    this.toyService.treeSettings.snow = !this.toyService.treeSettings.snow
    if(this.toyService.treeSettings.snow ===true){
      console.log('i Work')
      this.animateSnow.emit()
    }
  }
}
