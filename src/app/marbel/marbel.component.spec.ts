import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarbelComponent } from './marbel.component';

describe('MarbelComponent', () => {
  let component: MarbelComponent;
  let fixture: ComponentFixture<MarbelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarbelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarbelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
