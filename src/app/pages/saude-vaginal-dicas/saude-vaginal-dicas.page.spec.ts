import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaudeVaginalDicasPage } from './saude-vaginal-dicas.page';

describe('SaudeVaginalDicasPage', () => {
  let component: SaudeVaginalDicasPage;
  let fixture: ComponentFixture<SaudeVaginalDicasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaudeVaginalDicasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaudeVaginalDicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
