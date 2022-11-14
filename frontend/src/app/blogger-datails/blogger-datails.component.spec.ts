import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggerDatailsComponent } from './blogger-datails.component';

describe('BloggerDatailsComponent', () => {
  let component: BloggerDatailsComponent;
  let fixture: ComponentFixture<BloggerDatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloggerDatailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloggerDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
