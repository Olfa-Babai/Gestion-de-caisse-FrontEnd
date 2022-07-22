import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosingpageComponent } from './choosingpage.component';

describe('ChoosingpageComponent', () => {
  let component: ChoosingpageComponent;
  let fixture: ComponentFixture<ChoosingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosingpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
