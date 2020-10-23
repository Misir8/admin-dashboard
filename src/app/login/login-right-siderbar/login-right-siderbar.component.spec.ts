import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRightSiderbarComponent } from './login-right-siderbar.component';

describe('LoginRightSiderbarComponent', () => {
  let component: LoginRightSiderbarComponent;
  let fixture: ComponentFixture<LoginRightSiderbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRightSiderbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRightSiderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
