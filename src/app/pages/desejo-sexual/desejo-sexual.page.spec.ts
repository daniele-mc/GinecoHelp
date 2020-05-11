import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesejoSexualPage } from './desejo-sexual.page';

describe('DesejoSexualPage', () => {
  let component: DesejoSexualPage;
  let fixture: ComponentFixture<DesejoSexualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesejoSexualPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesejoSexualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
