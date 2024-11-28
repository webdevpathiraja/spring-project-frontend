import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NacBarComponent } from './nac-bar.component';

describe('NacBarComponent', () => {
  let component: NacBarComponent;
  let fixture: ComponentFixture<NacBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NacBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NacBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
