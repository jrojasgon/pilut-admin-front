import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Search} from '../../model/search';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @Input()
  searchForm: FormGroup;
  @Input()
  dateSearch: Search;

  @Output()
  requestCompetition = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    const currentDate = new Date();
    this.searchForm.controls.fromDate.setValue(this.fromModel(currentDate));
    this.searchForm.controls.toDate.setValue(this.fromModel(currentDate));
    this.dateSearch.fromDate = this.toModel(this.searchForm.get('fromDate').value);
    this.dateSearch.toDate = this.toModel(this.searchForm.get('toDate').value);

    this.searchForm.get('fromDate').valueChanges.subscribe(value => {
      console.log(this.toModel(value));
      this.dateSearch.fromDate = this.toModel(value);
      this.requestCompetition.emit('eventDesc');
    });

    this.searchForm.get('toDate').valueChanges.subscribe(value => {
      console.log(this.toModel(value));
      this.dateSearch.toDate = this.toModel(value);
      this.requestCompetition.emit('eventDesc');
    });
  }

  fromModel(date: Date): NgbDateStruct {
    return date ? {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    } : null;
  }

  toModel(date: NgbDateStruct): Date {
    return date ? new Date(date.year, date.month - 1, date.day) : null;
  }
}
