import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicRaitComponent } from './music-rait.component';

describe('MusicRaitComponent', () => {
  let component: MusicRaitComponent;
  let fixture: ComponentFixture<MusicRaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicRaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicRaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
