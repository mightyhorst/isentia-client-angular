import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { ContainerComponent } from './container.component';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ RouterTestingModule ],
            declarations: [ ContainerComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a main section ', async(() => {
        const fixture = TestBed.createComponent(ContainerComponent);
        fixture.detectChanges();

        const compiled = fixture.debugElement.nativeElement;
        var lookForEl = compiled.querySelector('main');

        expect(lookForEl).toBeTruthy();
    });

    it('should have a router outlet ', async(() => {
        const fixture = TestBed.createComponent(ContainerComponent);
        fixture.detectChanges();

        const compiled = fixture.debugElement.nativeElement;
        var lookForEl = compiled.querySelector('router-outlet');

        expect(lookForEl).toBeTruthy();
    });
    
});
