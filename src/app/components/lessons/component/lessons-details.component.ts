import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Lesson} from '../../../models/lesson.model';

/* decorator for lessons component */

@Component({
  selector: 'app-lessons-details',
  templateUrl: './lessons-details.component.html',
  styleUrls: ['./lessons-details.component.scss']
})

export class LessonsDetailsComponent {
  @Input() lessons: Lesson[];
  @Input() selectedLesson: Lesson[];
  @Output() add = new EventEmitter();
  @Output() select = new EventEmitter();

  onSubmit(lessonForm: NgForm) {
    if (!lessonForm.valid){
      return;
    }
    
    const formValue = lessonForm.value;
    this.add.emit(formValue);
    lessonForm.reset('');
  }

  onSelect(lesson: Lesson) {
    this.select.emit(lesson);
  }

}
