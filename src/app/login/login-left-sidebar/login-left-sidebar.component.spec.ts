import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLeftSidebarComponent } from './login-left-sidebar.component';

describe('LoginLeftSidebarComponent', () => {
  let component: LoginLeftSidebarComponent;
  let fixture: ComponentFixture<LoginLeftSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginLeftSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
