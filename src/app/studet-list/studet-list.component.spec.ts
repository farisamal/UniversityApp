import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudetListComponent } from './studet-list.component';

describe('StudetListComponent', () => {
  let component: StudetListComponent;
  let fixture: ComponentFixture<StudetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudetListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
