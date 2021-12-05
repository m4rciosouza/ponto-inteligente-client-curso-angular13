import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CadastrarPfComponent } from './cadastrar-pf.component';

describe('CadastrarPfComponent', () => {
  let component: CadastrarPfComponent;
  let fixture: ComponentFixture<CadastrarPfComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarPfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
