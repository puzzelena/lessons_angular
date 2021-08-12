import {Component,
        EventEmitter, 
        Input, 
        Output, 
        OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Lesson} from '../../../models/lesson.model';
import {LessonsService} from '../../../services/lessons.service';

@Component({
  selector: 'app-selected-lesson',
  templateUrl: './selected-lesson.component.html',
  styleUrls: ['./selected-lesson.component.scss']
})

export class SelectedLessonComponent implements OnInit {

  @Input() selectedLesson: Lesson;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  submitted = false;

  constructor(private lessonsService: LessonsService) {
  }

  ngOnInit(): void {
    this.lessonsService.getAllLessons();
  }

  onDeleteLesson(lesson: Lesson) {
    this.delete.emit(lesson);
  }

  onEditLesson(lessonForm: NgForm) {
    this.submitted = true;
    if (!lessonForm.valid){
      return;
  }

    const formValue = lessonForm.value;
    this.edit.emit(formValue);
    this.submitted = false;
  }

}
