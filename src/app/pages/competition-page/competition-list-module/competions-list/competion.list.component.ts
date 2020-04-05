import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CompetitionService} from '../../shared/services/competition.service';
import {Competition} from '../../shared/model/competition';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Search} from '../../../../shared/model/search';
import {SearchFormComponent} from '../../../../shared/components/search-form/search-form.component';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-competions',
  templateUrl: './competion.list.component.html',
  styleUrls: ['./competion.list.component.scss']
})
export class CompetionListComponent implements OnInit, AfterViewInit {

  @ViewChild(SearchFormComponent) searchComponent;
  searchForm: FormGroup;
  fromDate: Date;
  toDate: Date;
  todoCompetitions = Array<Competition>();
  inProgressCompetition = Array<Competition>();
  doneCompetitions = Array<Competition>();
  onHoldCompetitions = Array<Competition>();
  competitionDateSearch = new Search();
  loading = false;

  constructor(private competitionService: CompetitionService, private formBuilder: FormBuilder, private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.createSearchForm();
  }

  createSearchForm() {
    this.searchForm = this.formBuilder.group({
      fromDate: ['', [Validators.required]],
      toDate: ['', [Validators.required]]
    });
  }

  requestCompetitions() {
    this.competitionDateSearch.fromDate = this.searchComponent.dateSearch.fromDate;
    this.competitionDateSearch.toDate = this.searchComponent.dateSearch.toDate;

    this.competitionService.getCompetitionsByStatusAndDate(this.competitionDateSearch).subscribe(data => {
      this.loading = false;
      if (data == null) {
        this.toast.error('Un error se produjo intente de nuevo', '');
      } else {
        this.todoCompetitions = data.TO_DO;
        this.inProgressCompetition = data.IN_PROGRESS;
        this.doneCompetitions = data.DONE;
        this.onHoldCompetitions = data.ON_HOLD;
      }
    });
  }

  ngAfterViewInit(): void {
    this.competitionDateSearch = this.searchComponent.dateSearch;
    this.requestCompetitions();
    this.loading = true;
  }
}
