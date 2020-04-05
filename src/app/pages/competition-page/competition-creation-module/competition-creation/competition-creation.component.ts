import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {City} from '../model/criteria';
import {CompetitionService} from '../../shared/services/competition.service';
import {Competition} from '../../shared/model/competition';
import {ToastrService} from 'ngx-toastr';
import {User} from '../../../../shared/model/user';

@Component({
  selector: 'app-collector-creation',
  templateUrl: './competition-creation.component.html',
  styleUrls: ['competition-creation.component.css']
})
export class CompetitionCreationComponent implements OnInit {

  criteriaForm: FormGroup;
  ageRanges = [];
  debtRanges = [];
  debtAges = [];
  cities = [];
  residentialZones = [];
  cardCanalStyleWhatsApp = '';
  cardCanalStyleSMS = '';
  cardCanalStyleMail = '';
  cardCanalStyleCall = '';
  canal = '';
  showCanal = false;
  totalClients = 0;
  competitionClients = 0;
  selectedClients = 0;
  percentAccumulated = 0;
  percentInCompetition = 0;
  percentSelected = 0;

  constructor(private formBuilder: FormBuilder, private competitionService: CompetitionService, private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.createCriteriaForm();
    this.initCriteriaValues();
  }

  createCriteriaForm() {
    this.criteriaForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      debtAge: ['', [Validators.required]],
      capitalRange: ['', [Validators.required]],
      age: ['', [Validators.required]],
      city: ['', [Validators.required]],
      residentialZone: ['', [Validators.required]],
      comCanal: ['', [Validators.required]],
      comment: ['', [Validators.required]],
      message: [{value: '', disabled: true}, [Validators.required]],
    });

    this.onChanges();
  }

  onChanges() {
    this.criteriaForm.get('city').valueChanges.subscribe(value => {
      const city: City = value;
      this.residentialZones = city.residentialZones;
    });
    this.criteriaForm.get('message').valueChanges.subscribe(value => {
      this.fakeControlComCanal();
    });
    this.criteriaForm.valueChanges.subscribe(value => {
      this.totalClients = this.randomInteger(5000, 3000000);
      this.competitionClients = this.totalClients - 2000;
      this.selectedClients = this.competitionClients / 2;
      this.percentAccumulated = this.roundNumber(this.randomNumber(20, 100));
      this.percentInCompetition = this.roundNumber(this.randomNumber(20, 100) - 20);
      this.percentSelected = this.roundNumber(this.selectedClients / this.totalClients) * 100;
    });
  }

  roundNumber(value: number) {
    return Math.round(value * 100) / 100;
  }

  randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  initCriteriaValues() {
    this.competitionService.getAllCompetitionCriteria()
      .subscribe(
        data => {
          this.cities = data.cities;
          this.debtAges = data.debtAges;
          this.ageRanges = data.ageRanges;
          this.debtRanges = data.debtRanges;
        },
        error => {
          console.error('Error', error.message);
        });
  }

  createCompetition() {
    if (this.criteriaForm.valid) {
      const name = this.criteriaForm.get('name').value;
      const debtAge = this.criteriaForm.get('debtAge').value;
      const capitalRange = this.criteriaForm.get('capitalRange').value;
      const age = this.criteriaForm.get('age').value;
      const message = this.criteriaForm.get('message').value;
      const comment = this.criteriaForm.get('comment').value;
      const city = this.criteriaForm.get('city').value;
      const residentialZone = this.criteriaForm.get('residentialZone').value;
      const user: User = JSON.parse(localStorage.getItem('user'));
      const competition = new Competition(name, debtAge, capitalRange, age, city, residentialZone, this.canal,
        comment, message, user, new Date());
      this.competitionService.createCompetition(competition).subscribe(data => {
        if (data == null) {
          this.toast.error('Un error se produjo intente de nuevo', '');
        } else {
          this.toast.success('La competencia ha sido creada correctamente', '');
          this.competitionService.navigate('competition/list');
        }
      });
    }
  }

  whatsApp() {
    this.cardCanalStyleWhatsApp = '#CBD7F5';
    this.cardCanalStyleSMS = '';
    this.cardCanalStyleMail = '';
    this.cardCanalStyleCall = '';
    this.canal = 'WhatsApp';
    this.criteriaForm.get('message').enable();
  }

  sms() {
    this.cardCanalStyleSMS = '#CBD7F5';
    this.cardCanalStyleWhatsApp = '';
    this.cardCanalStyleMail = '';
    this.cardCanalStyleCall = '';
    this.canal = 'SMS';
    this.criteriaForm.get('message').enable();
  }

  mail() {
    this.cardCanalStyleMail = '#CBD7F5';
    this.cardCanalStyleSMS = '';
    this.cardCanalStyleWhatsApp = '';
    this.cardCanalStyleCall = '';
    this.canal = 'Mail';
    this.criteriaForm.get('message').enable();
  }

  call() {
    this.cardCanalStyleCall = '#CBD7F5';
    this.cardCanalStyleSMS = '';
    this.cardCanalStyleWhatsApp = '';
    this.cardCanalStyleMail = '';
    this.canal = 'Llamada';
    this.criteriaForm.get('message').enable();
  }

  fakeControlComCanal() {
    if (this.criteriaForm.get('message').value !== '') {
      this.criteriaForm.get('comCanal').setValue('a');
    }
  }

}
