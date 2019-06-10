import { HttpClient } from "@angular/common/http";
import { Car } from "../domain/car";
import data from "../../../assets/data/cars-small.json";
import { Injectable } from "@angular/core";
import { SequenceEventMetricService } from "../metric/sequence-event-metric.service";

export function metric(target, key, properties){
    console.log('test');
    console.log(target);
}

@Injectable({
    providedIn: 'root',
  })
export class CarService {
    constructor(private http: HttpClient, private sequenceMetric:SequenceEventMetricService) {

    }

    @metric
    getCarsSmall() {
        /*return this.http.get('/data/cars-small.json')
            .toPromise()
            .then( res => <Car[]> res.data)
            .then( data => {return data;});
            */
        return data.data;
    }
}