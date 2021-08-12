import {Injectable} from '@angular/core';
import {Lesson} from '../models/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  lessons: Lesson[] = [];

  getAllLessons(): Lesson[] {
    return this.lessons;
  }

  addLesson(lesson: Lesson) {
    this.lessons = this.lessons.concat(lesson);
  }
}