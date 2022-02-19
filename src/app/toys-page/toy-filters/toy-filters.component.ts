import { Component, OnInit } from '@angular/core';
import { ToyServiceService } from 'src/app/toy-service.service';
@Component({
  selector: 'app-toy-filters',
  templateUrl: './toy-filters.component.html',
  styleUrls: ['./toy-filters.component.css'],
})
export class ToyFiltersComponent implements OnInit {
  constructor(public toyService: ToyServiceService) {}

  ngOnInit(): void {
    console.log('initialized')
  }
  updAppearanceFilter(e: Event, set: Set<string | undefined>) {
    const target = e.target as HTMLElement;
    if (set.has(target.dataset['criteria'])) {
      set.delete(target.dataset['criteria']);
    } else {
      set.add(target.dataset['criteria']);
    }
    console.log(set)
    this.toyService.filterToys()
  }
  updSortFunc(e: Event) {
  const val = (e.target as HTMLSelectElement).value
  this.toyService.filters.sort = val
  this.toyService.filterToys()
  }
  updSearch(e:Event){
    const val = (e.target as HTMLInputElement).value
    this.toyService.filters.search = val
    this.toyService.filterToys()
  }
}
