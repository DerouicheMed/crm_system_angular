import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFrontComponent } from './home-front.component';

describe('HomeFrontComponent', () => {
  let component: HomeFrontComponent;
  let fixture: ComponentFixture<HomeFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
