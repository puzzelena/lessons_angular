import {Component, OnInit} from '@angular/core';
import {Lesson} from '../../../models/lesson.model';
import {LessonsService} from '../../../services/lessons.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})

export class LessonsComponent implements OnInit {

  lessons: Lesson[];
  selectedLesson: Lesson;
  totalHours: number;

  constructor(private lessonsService: LessonsService) {

  }

  ngOnInit(): void {
    this.lessons = this.lessonsService.getAllLessons();
    this.generalAmount();
  }

  generalAmount() {
    this.totalHours = this.lessons.map(
      value => {
      return value.hour;
    })
    .reduce((sum, value) => {
      return sum + value;
    }, 0);
  }

  onDelete(lesson: Lesson) {
    const indexOfLesson = this.lessons.indexOf(lesson);
    this.lessons.splice(indexOfLesson, 1);
    this.selectedLesson = null;
    this.generalAmount();
  }

  onAdd(lesson: Lesson) {
    this.lessonsService.addLesson(lesson);
    this.lessons = this.lessonsService.getAllLessons();
    this.generalAmount();
  }

  onSelect(lesson: Lesson): Lesson {
    return this.selectedLesson = lesson;
  }

  onEdit(lesson: Lesson) {
    this.lessons.map(
      (item, index) => {
      const indexOfLesson = this.lessons.indexOf(lesson);
      return index === indexOfLesson ? 
      {...item, item: {name : lesson.name, hour: lesson.hour}} 
      : item;
    });
    this.selectedLesson = null;
    this.generalAmount();
  }
}