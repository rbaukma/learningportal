import { Component, OnInit } from '@angular/core';
import { AllCoursesType } from '../models/learning-app/all-courses';
import { PopularLecturersType } from '../models/learning-app/popular-lecturers';
import { CategoriesType } from '../models/learning-app/categories';
import { CurrentlyAttendingType } from '../models/learning-app/currently-attending';
import { LearningAppService } from '../services/learning-app.service';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public learningAppCurrentlyAttending!: CurrentlyAttendingType[];
  public learningAppCategories!: CategoriesType[];
  public learningAppPopularLecturers!: PopularLecturersType[];

  constructor(
    private learningAppService: LearningAppService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.learningAppService.getCurrentlyAttending().subscribe(data => this.learningAppCurrentlyAttending = data);
    this.learningAppService.getCategories().subscribe(data => this.learningAppCategories = data);
    this.learningAppService.getPopularLecturers().subscribe(data => this.learningAppPopularLecturers = data);
  }
}
