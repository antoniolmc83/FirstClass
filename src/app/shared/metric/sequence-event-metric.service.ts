import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SequenceEventMetricService {

  
  readonly EVENTS_KEY:string = '_events_name';

  constructor() { 
    let events:string[] = [];
    sessionStorage.setItem(this.EVENTS_KEY, JSON.stringify(events));
    console.log('construvtor---');
  }

  public addEvent(event:string) {
    const events:string[] = JSON.parse(sessionStorage.getItem(this.EVENTS_KEY));
    //TODO: check if event is target

    let eventIndex = events.indexOf(event);    
    if( eventIndex === -1){
      events.push(event);
    }else {
      console.log(eventIndex);
      events.splice(eventIndex + 1, events.length - eventIndex - 1);
    };
    
    sessionStorage.setItem(this.EVENTS_KEY, JSON.stringify(events));
  }






}
