import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpeciesPage } from './species.page';

describe('SpeciesPage', () => {
  let component: SpeciesPage;
  let fixture: ComponentFixture<SpeciesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeciesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpeciesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
