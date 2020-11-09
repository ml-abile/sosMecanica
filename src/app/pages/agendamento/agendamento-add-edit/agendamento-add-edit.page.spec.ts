import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgendamentoAddEditPage } from './agendamento-add-edit.page';

describe('AgendamentoAddEditPage', () => {
  let component: AgendamentoAddEditPage;
  let fixture: ComponentFixture<AgendamentoAddEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendamentoAddEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgendamentoAddEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
