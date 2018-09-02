import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickrDetailsComponent } from './flickr-details.component';

describe('FlickrDetailsComponent', () => {
  let component: FlickrDetailsComponent;
  let fixture: ComponentFixture<FlickrDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlickrDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
