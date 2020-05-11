import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CicloMenstrualTresPage } from './ciclo-menstrual-tres.page';

describe('CicloMenstrualTresPage', () => {
  let component: CicloMenstrualTresPage;
  let fixture: ComponentFixture<CicloMenstrualTresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloMenstrualTresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CicloMenstrualTresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
