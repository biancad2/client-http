import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinBrlComponent } from './bitcoin-brl.component';

describe('BitcoinBrlComponent', () => {
  let component: BitcoinBrlComponent;
  let fixture: ComponentFixture<BitcoinBrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinBrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinBrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
