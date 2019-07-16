import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonoDialogComponent } from './mono-dialog.component';

describe('MonoDialogComponent', () => {
  let component: MonoDialogComponent;
  let fixture: ComponentFixture<MonoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
