import { Component, OnInit } from '@angular/core';
import { ToyServiceService } from 'src/app/toy-service.service';
import * as noUiSlider from 'nouislider'
import { FilterObjInterface } from 'src/app/interfaces';
@Component({
  selector: 'app-toy-filters',
  templateUrl: './toy-filters.component.html',
  styleUrls: ['./toy-filters.component.css'],
})
export class ToyFiltersComponent implements OnInit {
  constructor(public toyService: ToyServiceService) {}

  ngOnInit(): void {
    console.log('initialized')
    this.setSliders(this.toyService.filters, this.toyService)
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
  updFavorite(val:boolean){
    this.toyService.filters.favorite = val
    this.toyService.filterToys()
  }
  setSliders(filters: FilterObjInterface, toyService:ToyServiceService) {
    const yearSlider = document.getElementById('year-slider') as noUiSlider.target
    const amountSlider = document.getElementById('amount-slider') as noUiSlider.target
    console.log(yearSlider, amountSlider)

    noUiSlider.create(yearSlider, {
        start: [this.toyService.filters.beginYear as number, this.toyService.filters.endYear as number],
        behaviour: 'drag',
        step: 1,
        connect: true,
        range: {
            min: 1940,
            max: 2020,
        },
    })
    noUiSlider.create(amountSlider, {
        start: [this.toyService.filters.beginAmount as number, this.toyService.filters.endAmount as number],
        behaviour: 'drag',
        step: 1,
        connect: true,
        range: {
            min: 1,
            max: 12,
        },
    })
    const yearOutput = [
        document.getElementById('begin-year') as HTMLElement,
        document.getElementById('end-year') as HTMLElement,
    ]
    const amountOutput = [
        document.getElementById('begin-amount') as HTMLElement,
        document.getElementById('end-amount') as HTMLElement,
    ]

    yearSlider?.noUiSlider?.on('slide', function (values, handleBar) {
        yearOutput[handleBar].textContent = values[handleBar].toString().slice(0, 4)
        filters.beginYear = Number(document.getElementById('begin-year')?.textContent)
        filters.endYear = Number(document.getElementById('end-year')?.textContent)
        toyService.filterToys()
    })
    amountSlider?.noUiSlider?.on('slide', function (values, handleBar) {
        amountOutput[handleBar].textContent = values[handleBar].toString().slice(0, 2)
        filters.beginAmount = Number(document.getElementById('begin-amount')?.textContent)
        filters.endAmount = Number(document.getElementById('end-amount')?.textContent)
        toyService.filterToys()
    })
}
}
