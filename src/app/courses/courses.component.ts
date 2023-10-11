import { Component, OnInit } from '@angular/core';
import { AllCoursesType } from '../models/learning-app/all-courses';
import { PopularLecturersType } from '../models/learning-app/popular-lecturers';
import { CategoriesType } from '../models/learning-app/categories';
import { CurrentlyAttendingType } from '../models/learning-app/currently-attending';
import { LearningAppService } from '../services/learning-app.service';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public learningAppAllCourses!: AllCoursesType[];
  public value = '4';

  constructor(
    private learningAppService: LearningAppService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.learningAppService.getAllCourses().subscribe(data => this.learningAppAllCourses = data);
  }
}
