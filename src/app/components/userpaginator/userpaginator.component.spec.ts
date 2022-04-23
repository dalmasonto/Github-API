import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpaginatorComponent } from './userpaginator.component';

describe('UserpaginatorComponent', () => {
  let component: UserpaginatorComponent;
  let fixture: ComponentFixture<UserpaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
