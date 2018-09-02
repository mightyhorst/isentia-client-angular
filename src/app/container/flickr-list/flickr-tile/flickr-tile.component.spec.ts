import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickrTileComponent } from './flickr-tile.component';

describe('FlickrTileComponent', () => {
  let component: FlickrTileComponent;
  let fixture: ComponentFixture<FlickrTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlickrTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
