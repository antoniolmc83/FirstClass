import { TestBed } from '@angular/core/testing';

import { SequenceEventMetricService } from './sequence-event-metric.service';

describe('SequenceEventMetricService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SequenceEventMetricService = TestBed.get(SequenceEventMetricService);
    expect(service).toBeTruthy();
  });
});
