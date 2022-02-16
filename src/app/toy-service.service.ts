import { Injectable } from '@angular/core';
import toyData from './data';
import { Toy } from './interfaces';
import { FilterObjInterface } from './interfaces';
@Injectable({
  providedIn: 'root'
})
export class ToyServiceService {
  toyData: Toy[]
  favs: Toy[]
  filters: FilterObjInterface
  filtered: Toy[]
  constructor() {
    this.toyData = toyData
    this.favs = []
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
  this.filtered = toyData
   }
}
