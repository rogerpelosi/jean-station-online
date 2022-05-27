import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminnewproductComponent } from './adminnewproduct.component';

describe('AdminnewproductComponent', () => {
  let component: AdminnewproductComponent;
  let fixture: ComponentFixture<AdminnewproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminnewproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminnewproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
