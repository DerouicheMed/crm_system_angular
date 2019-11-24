import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBackComponent } from './home-back.component';

describe('HomeBackComponent', () => {
  let component: HomeBackComponent;
  let fixture: ComponentFixture<HomeBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
