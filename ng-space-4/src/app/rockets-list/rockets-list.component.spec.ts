import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RocketsListComponent } from './rockets-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RocketsService } from '../services/rockets.service';
import { stub } from 'sinon';
import { of } from 'rxjs';
import { Rocket } from '../models/rocket.model';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

describe('RocketsListComponent', () => {

  let component: RocketsListComponent;
  let fixture: ComponentFixture<RocketsListComponent>;
  let rocketsService: RocketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        CommonModule
      ],
      declarations: [RocketsListComponent],
      providers: [
        RocketsService
      ]
    });

    fixture = TestBed.createComponent(RocketsListComponent);
    rocketsService = TestBed.get(RocketsService);
    component = fixture.componentInstance;
  });

  it('should create RocketsListComponent when all dependencies are available', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should create 3 rows when total fetched rockets is 3', () => {
    stub(rocketsService, "getRockets").callsFake(() => of([
      {
        id: 1,
        active: false,
        company: 'SpaceX',
        rocket_name: 'Falcon 1',
        first_flight: '2006-03-24'
      },
      {
        id: 2,
        active: true,
        company: 'SpaceX',
        rocket_name: 'Falcon 9',
        first_flight: '2010-06-04'
      },
      {
        id: 3,
        active: true,
        company: 'SpaceX',
        rocket_name: 'Falcon Heavy',
        first_flight: '2018-02-06'
      }
    ] as Rocket[]));
    fixture.detectChanges();
    const rows = fixture.debugElement.queryAll(By.css('.item-row'));
    // console.log(fixture.debugElement.nativeElement);
    expect(rows.length).toBe(3);
  });

  it('should use active class when rocket is active', () => {
    stub(rocketsService, "getRockets").callsFake(() => of([
      {
        id: 1,
        active: true,
        company: 'SpaceX',
        rocket_name: 'Falcon 1',
        first_flight: '2006-03-24'
      }
    ] as Rocket[]));
    fixture.detectChanges();
    const icon = fixture.debugElement.query(By.css('i'));
    // console.log(icon.classes);
    expect(icon.classes['active']).toBeTruthy();
  });

  it('should use inactive class when rocket is inactive', () => {
    stub(rocketsService, "getRockets").callsFake(() => of([
      {
        id: 1,
        active: false,
        company: 'SpaceX',
        rocket_name: 'Falcon 1',
        first_flight: '2006-03-24'
      }
    ] as Rocket[]));
    fixture.detectChanges();
    const icon = fixture.debugElement.query(By.css('i'));
    // console.log(icon.classes);
    expect(icon.classes['inactive']).toBeTruthy();
  });
});
