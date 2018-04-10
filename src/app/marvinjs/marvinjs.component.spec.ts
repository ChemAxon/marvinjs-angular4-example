import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvinjsComponent } from './marvinjs.component';

describe('MarvinjsComponent', () => {
  let component: MarvinjsComponent;
  let fixture: ComponentFixture<MarvinjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvinjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvinjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
