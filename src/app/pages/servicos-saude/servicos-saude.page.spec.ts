import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServicosSaudePage } from './servicos-saude.page';

describe('ServicosSaudePage', () => {
  let component: ServicosSaudePage;
  let fixture: ComponentFixture<ServicosSaudePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicosSaudePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicosSaudePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
