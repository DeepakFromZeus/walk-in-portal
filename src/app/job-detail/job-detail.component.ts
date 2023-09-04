import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobDetailService } from './services/job-detail.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  private routeSub: any;

  public job: any;
  public instructions: any;
  public roles: any;
  public generalInstructions: any;
  public examInstructions: any;


  constructor(private route: ActivatedRoute, private _JobDetailService: JobDetailService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this._JobDetailService.GetJobDetail(id).subscribe(res => {
      this.job = res[0];
      // console.log(res);
    })


    this._JobDetailService.GetInstructions(id).subscribe(res => {
      this.instructions = res;
      this.generalInstructions = res.filter((d: { title: string; }) => d.title === 'General Instructions');
      this.examInstructions = res.filter((d: { title: string; }) => d.title === 'Instructions for the exam');

      // console.log(res);
      // console.log(this.generalInstructions);

    })


    this._JobDetailService.GetRoles(id).subscribe(res => {
      this.roles = res;
      console.log(res);
    })



  }

  joinDate(date: any, separator: any) {
    let options = [{ day: 'numeric' }, { month: 'short' }, { year: 'numeric' }];
    function format(option: any) {
      let formatter = new Intl.DateTimeFormat('en', option);
      return formatter.format(new Date(date));
    }
    return options.map(format).join(separator);
  }
}
