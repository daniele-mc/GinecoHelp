import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SexoPage } from './sexo.page';

describe('SexoPage', () => {
  let component: SexoPage;
  let fixture: ComponentFixture<SexoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SexoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SexoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
