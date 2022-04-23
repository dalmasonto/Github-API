import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-userpaginator',
  templateUrl: './userpaginator.component.html',
  styleUrls: ['./userpaginator.component.scss']
})
export class UserpaginatorComponent implements OnInit {

  @Input() users: any;

  current_page: number = 1;
  page_count: number = 0;
  results_per_page: number = 5;

  users_to_show: any = [];


  constructor() { }

  ngOnInit(): void {
    this.page_count = Math.ceil(this.users.length / this.results_per_page)
    console.log(this.users, this.page_count)
    this.paginate(this.current_page)
  }

  counter(i: number) {
    return new Array(i);
  }

  paginate(page: number) {
    this.current_page = page;
    this.users_to_show = this.users.slice((this.current_page - 1) * this.results_per_page, page * this.results_per_page)
  }

  nextPage() {
    const next_page = this.current_page + 1;
    if (next_page <= this.page_count) {
      this.current_page = next_page;
      this.paginate(this.current_page)
    }
    else {
      this.current_page = 1;
      this.paginate(this.current_page)
    }
  }

  previousPage() {
    const previous_page = this.current_page - 1;
    if (previous_page > 0) {
      this.current_page = previous_page;
      this.paginate(this.current_page)
    }
    else {
      this.current_page = this.page_count;
      this.paginate(this.current_page)
    }
  }

}
