import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPhotosComponent } from './list-of-photos.component';

describe('ListOfPhotosComponent', () => {
  let component: ListOfPhotosComponent;
  let fixture: ComponentFixture<ListOfPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
