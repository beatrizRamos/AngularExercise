import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLojasComponent } from './list-lojas.component';

describe('ListLojasComponent', () => {
  let component: ListLojasComponent;
  let fixture: ComponentFixture<ListLojasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLojasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLojasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
