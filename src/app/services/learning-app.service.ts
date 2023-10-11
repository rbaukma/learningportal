import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllCoursesType } from '../models/learning-app/all-courses';
import { CategoriesType } from '../models/learning-app/categories';
import { CurrentlyAttendingType } from '../models/learning-app/currently-attending';
import { PopularLecturersType } from '../models/learning-app/popular-lecturers';

@Injectable({
  providedIn: 'root'
})
export class LearningAppService {
  constructor(
    private http: HttpClient
  ) { }

  public getCurrentlyAttending(): Observable<CurrentlyAttendingType[]> {
    return this.http.get<CurrentlyAttendingType[]>("https://excel2json.io/api/share/411814c4-bebf-4b2c-e661-08dab79fa5b4");
  }

  public getCategories(): Observable<CategoriesType[]> {
    return this.http.get<CategoriesType[]>("https://excel2json.io/api/share/c7c0f004-5d70-41db-e663-08dab79fa5b4");
  }

  public getPopularLecturers(): Observable<PopularLecturersType[]> {
    return this.http.get<PopularLecturersType[]>("https://excel2json.io/api/share/f2c280b7-2b1b-47c5-e662-08dab79fa5b4");
  }

  public getAllCourses(): Observable<AllCoursesType[]> {
    return this.http.get<AllCoursesType[]>("https://excel2json.io/api/share/28f292a3-d187-48c4-e660-08dab79fa5b4");
  }
}
