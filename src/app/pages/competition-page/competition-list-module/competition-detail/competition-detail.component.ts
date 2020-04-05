import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Competition} from '../../shared/model/competition';

@Component({
  selector: 'app-competition-detail',
  templateUrl: './competition-detail.component.html',
  styleUrls: ['./competition-detail.component.css']
})
export class CompetitionDetailComponent implements OnInit {

  @Input() competition: Competition;
  detailForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    this.buildItemForm();
  }

  private buildItemForm() {
    console.log(this.competition);
    this.detailForm = this.formBuilder.group({
      debtAge: [this.competition.debtAge.name],
      capitalRange: [this.competition.debtRange.name],
      age: [this.competition.ageRange.name],
      city: [this.competition.city.name],
      residentialZone: [this.competition.residentialZone],
      comCanal: [this.competition.commCanal],
      comment: [this.competition.comment],
    });
  }

}
