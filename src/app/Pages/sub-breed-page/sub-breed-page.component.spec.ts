import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubBreedPageComponent } from './sub-breed-page.component';

describe('SubBreedPageComponent', () => {
  let component: SubBreedPageComponent;
  let fixture: ComponentFixture<SubBreedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubBreedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubBreedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
