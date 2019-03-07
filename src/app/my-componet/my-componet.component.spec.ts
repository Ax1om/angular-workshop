import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponetComponent } from './my-componet.component';

describe('MyComponetComponent', () => {
  let component: MyComponetComponent;
  let fixture: ComponentFixture<MyComponetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComponetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
