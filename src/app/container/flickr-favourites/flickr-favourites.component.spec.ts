import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickrFavouritesComponent } from './flickr-favourites.component';

describe('FlickrFavouritesComponent', () => {
  let component: FlickrFavouritesComponent;
  let fixture: ComponentFixture<FlickrFavouritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlickrFavouritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
