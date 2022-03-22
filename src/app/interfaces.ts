export interface Toy {
    num: string
    name: string
    count: string
    year: string
    shape: string
    color: string
    size: string
    favorite: boolean
    pos?: {
      x:string
      y:string
    }
}
export interface DraggableToy extends Toy{
pos:{
  x:string
  y:string
}
}

export interface FilterObjInterface  {
    shape: Set<string | undefined>
    color: Set<string | undefined>
    size: Set<string | undefined>
    favorite: boolean
    sort: string
    search: string
    beginYear: number
    endYear: number
    beginAmount: number
    endAmount: number
}
/*export type FilterObjTemp = {
    [key: string]: FilterVal
}*/
/*export type FilterVal = Set<string | undefined> | boolean | string | number | Array<string | undefined>*/

export interface TreePageSettingsObjInterface {
    treeImg: string
    bg: string
    snow: boolean
    music: boolean
    lightsColor: string
    lightsOn: boolean
}
export interface TreePageSettings  {
  treeImg: string
  bg: string,
  snow: boolean,
  music: boolean,
  lightsColor: string,
  lightsAnim: string
  lightsOn: boolean,
}
export interface posObjInt{
  x:number
  y:number
}
