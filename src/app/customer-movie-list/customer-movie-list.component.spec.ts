import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMovieListComponent } from './customer-movie-list.component';

describe('CustomerMovieListComponent', () => {
  let component: CustomerMovieListComponent;
  let fixture: ComponentFixture<CustomerMovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerMovieListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
