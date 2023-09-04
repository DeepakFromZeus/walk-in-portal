import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortalService } from './services/portal.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  public jobOpenings: any = [];

  constructor(private route: Router, private _PortalService: PortalService) { }

  ngOnInit(): void {

    this._PortalService.GetJobOpenings().subscribe(res => {
      this.jobOpenings = res
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

  navigate(id: any) {
    this.route.navigate(['walk-in-details/' + id])
  }

}
