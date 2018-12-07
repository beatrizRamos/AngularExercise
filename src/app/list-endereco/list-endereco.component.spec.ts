import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnderecoComponent } from './list-endereco.component';

describe('ListEnderecoComponent', () => {
  let component: ListEnderecoComponent;
  let fixture: ComponentFixture<ListEnderecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEnderecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
