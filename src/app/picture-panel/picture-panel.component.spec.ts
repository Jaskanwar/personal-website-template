import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturePanelComponent } from './picture-panel.component';

describe('PicturePanelComponent', () => {
  let component: PicturePanelComponent;
  let fixture: ComponentFixture<PicturePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicturePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
