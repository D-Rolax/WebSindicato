import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComunidadComponent } from './dialog-comunidad.component';

describe('DialogComunidadComponent', () => {
  let component: DialogComunidadComponent;
  let fixture: ComponentFixture<DialogComunidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogComunidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComunidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
