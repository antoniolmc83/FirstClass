import { Component, OnInit, Input } from '@angular/core';
import { SequenceEventMetricService } from '../shared/metric/sequence-event-metric.service';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {

  @Input('title') title

  constructor(private sequenceMetric: SequenceEventMetricService) { }

  ngOnInit() {
    this.sequenceMetric.addEvent('test');
    this.sequenceMetric.addEvent('test1');
    this.sequenceMetric.addEvent('test2');
    this.sequenceMetric.addEvent('test3');
    this.sequenceMetric.addEvent('test1');
    this.sequenceMetric.addEvent('testA');
  }

}