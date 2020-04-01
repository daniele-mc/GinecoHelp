import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CicloMenstrualDoisPage } from './ciclo-menstrual-dois.page';

describe('CicloMenstrualDoisPage', () => {
  let component: CicloMenstrualDoisPage;
  let fixture: ComponentFixture<CicloMenstrualDoisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicloMenstrualDoisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CicloMenstrualDoisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
