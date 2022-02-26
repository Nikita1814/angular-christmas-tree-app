import { Injectable } from '@angular/core';
import toyData from './data';
import { Toy, TreePageSettings } from './interfaces';
import { FilterObjInterface } from './interfaces';
@Injectable({
  providedIn: 'root'
})
export class ToyServiceService {
  toyData: Toy[]
  favs: Set<Toy>
  filters: FilterObjInterface
  filtered: Toy[]
  sortfuncs: { [key: string]: (a: Toy, b: Toy) => number }
  treeSettings: TreePageSettings
  constructor() {
    this.toyData = toyData
    this.favs = new Set()
    this.filters = {
      shape: new Set(),
      color: new Set(),
      size: new Set(),
      favorite: false,
      sort: 'AZ',
      search: '',
      beginYear: 1940,
      endYear: 2020,
      beginAmount: 1,
      endAmount: 12,
  }
  this.treeSettings = {
    treeImg: '1',
    bg: '1',
    snow: false,
    music: false,
    lightsColor: 'yellow',
    lightsOn: false,
}
  this.sortfuncs = {
    AZ: function (a: Toy, b: Toy) {
        return a.name.localeCompare(b.name)
    },
    ZA: function (a: Toy, b: Toy) {
        return b.name.localeCompare(a.name)
    },
    increase: function (a: Toy, b: Toy) {
        return +a.count - +b.count
    },
    decrease: function (a: Toy, b: Toy) {
        return +b.count - +a.count
    },
}
  this.filtered = toyData
   }
   filterToys(sort?:'sort'){
    console.log(this.filtered)
    this.filtered = toyData


   this.filtered = this.filtered.filter((el) =>{
     console.log((
      ((this.filters.shape as Set<string | undefined>).has(el.shape) ||
          (this.filters.shape as Set<string | undefined>).size === 0) &&
      ((this.filters.color as Set<string | undefined>).has(el.color) ||
          (this.filters.color as Set<string | undefined>).size === 0) &&
      ((this.filters.size as Set<string | undefined>).has(el.size) ||
          (this.filters.size as Set<string | undefined>).size === 0)
  ))
    return (
      ((this.filters.shape as Set<string | undefined>).has(el.shape) ||
          (this.filters.shape as Set<string | undefined>).size === 0) &&
      ((this.filters.color as Set<string | undefined>).has(el.color) ||
          (this.filters.color as Set<string | undefined>).size === 0) &&
      ((this.filters.size as Set<string | undefined>).has(el.size) ||
          (this.filters.size as Set<string | undefined>).size === 0) &&
          Number(el.year) >= this.filters.beginYear &&
          Number(el.year) <= this.filters.endYear &&
          Number(el.count) >= this.filters.beginAmount &&
          Number(el.count) <= this.filters.endAmount
  )
   })

   if (this.filters.favorite === true) {
    this.filtered = this.filtered.filter((el) => {
        return el.favorite
    })
}
if (this.filters.search !== '') {
    this.filtered = this.filtered.filter((el) => {
        return el.name.toLowerCase().includes(this.filters.search)
    })
}
const sortMethod: (a: Toy, b: Toy) => number = this.sortfuncs[this.filters.sort]
this.filtered.sort(sortMethod)
console.log(this.filtered)
   }
   resetFilters(){
     this.filters = {
      shape: new Set(),
      color: new Set(),
      size: new Set(),
      favorite: false,
      sort: 'AZ',
      search: '',
      beginYear: 1940,
      endYear: 2020,
      beginAmount: 1,
      endAmount: 12,
  }
  this.filterToys()
   }
   manageFavs(num:string){
   if (this.favs.has(this.toyData[Number(num) - 1])){
     this.favs.delete(this.toyData[Number(num) - 1])
   } else if(this.favs.size < 20){
     this.favs.add(this.toyData[Number(num) - 1])
   }
   console.log(this.favs)
   }
}
