import { HttpClient } from "@angular/common/http";
import { Car } from "../domain/car";
import data from "../../../assets/data/cars-small.json";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
export class CarService {
    constructor(private http: HttpClient) {

    }

    getCarsSmall() {
        /*return this.http.get('/data/cars-small.json')
            .toPromise()
            .then( res => <Car[]> res.data)
            .then( data => {return data;});
            */
        return data.data;
    }
}