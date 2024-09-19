import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestimentsListByClientComponent } from './investiments-list-by-client.component';

describe('InvestimentsListByClientComponent', () => {
  let component: InvestimentsListByClientComponent;
  let fixture: ComponentFixture<InvestimentsListByClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestimentsListByClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestimentsListByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
