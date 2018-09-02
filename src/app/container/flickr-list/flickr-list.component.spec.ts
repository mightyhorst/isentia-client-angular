import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickrListComponent } from './flickr-list.component';

describe('FlickrListComponent', () => {
  let component: FlickrListComponent;
  let fixture: ComponentFixture<FlickrListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlickrListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
