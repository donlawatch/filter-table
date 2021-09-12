import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private httpService : HttpService){}
  categories: any[] = [];
  filterCatagories: any[] = [];
  inputFilter = new FormControl('')

  ngOnInit(): void {
    this.getCategories()  
  }

  ngAfterViewInit(): void {
    this.inputFilter.valueChanges.subscribe((value:string) => {
      if(!value.trim()) {
        this.filterCatagories = this.categories
        return
      }

      this.filterCatagories = this.categories.filter((category:string) => {
        return category.toLowerCase().indexOf(value.toLowerCase()) != -1
      })
    })
  }

  getCategories() {
    this.httpService.getCategories().subscribe((res) => {
      this.categories = res
      this.filterCatagories = res
    })
  }
}
