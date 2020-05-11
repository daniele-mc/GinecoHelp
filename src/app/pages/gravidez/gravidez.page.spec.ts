import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GravidezPage } from './gravidez.page';

describe('GravidezPage', () => {
  let component: GravidezPage;
  let fixture: ComponentFixture<GravidezPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GravidezPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GravidezPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
