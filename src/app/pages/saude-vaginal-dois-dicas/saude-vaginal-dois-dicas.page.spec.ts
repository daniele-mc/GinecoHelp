import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaudeVaginalDoisDicasPage } from './saude-vaginal-dois-dicas.page';

describe('SaudeVaginalDoisDicasPage', () => {
  let component: SaudeVaginalDoisDicasPage;
  let fixture: ComponentFixture<SaudeVaginalDoisDicasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudeVaginalDoisDicasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaudeVaginalDoisDicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
