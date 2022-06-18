import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcefunComponent } from './icefun.component';

describe('IcefunComponent', () => {
  let component: IcefunComponent;
  let fixture: ComponentFixture<IcefunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcefunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcefunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
