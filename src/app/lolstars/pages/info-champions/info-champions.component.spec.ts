import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoChampionsComponent } from './info-champions.component';

describe('InfoChampionsComponent', () => {
  let component: InfoChampionsComponent;
  let fixture: ComponentFixture<InfoChampionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoChampionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
