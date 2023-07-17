export interface IfetchResponse<T> {
  count: number;
  results: T[];
}
export type propsPageType = {
    searchParams: {
      page : string
    }
  }
export interface Ifilms {
  title: string;
  director: string;
  release_date: string;
}
export interface Ipeople {
  name: string;
  gender: string;
  birth_year: string;
}
export interface Iplanets {
  name: string;
  climate: string;
  terrain: string;
}
export interface Ispecies {
  name: string;
  classification: string;
  designation: string;
}
export interface Istarships {
  name: string;
  starship_class: string;
  crew: string;
}
export interface Ivehicles {
  name: string;
  vehicle_class: string;
  model: string;
}
