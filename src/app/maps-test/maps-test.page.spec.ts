import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapsTestPage } from './maps-test.page';

describe('MapsTestPage', () => {
  let component: MapsTestPage;
  let fixture: ComponentFixture<MapsTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapsTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
