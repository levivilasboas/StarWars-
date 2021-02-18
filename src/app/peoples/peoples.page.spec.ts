import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeoplesPage } from './peoples.page';

describe('PeoplesPage', () => {
  let component: PeoplesPage;
  let fixture: ComponentFixture<PeoplesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeoplesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
