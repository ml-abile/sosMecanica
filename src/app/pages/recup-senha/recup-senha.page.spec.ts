import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecupSenhaPage } from './recup-senha.page';

describe('RecupSenhaPage', () => {
  let component: RecupSenhaPage;
  let fixture: ComponentFixture<RecupSenhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecupSenhaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecupSenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
