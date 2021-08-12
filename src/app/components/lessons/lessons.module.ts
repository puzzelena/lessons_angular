import {NgModule} from '@angular/core';
import {LessonsComponent} from './container/lessons.component';
import {LessonsDetailsComponent} from './component/lessons-details.component';
import {SelectedLessonComponent} from './details/selected-lesson.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LessonsService} from '../../services/lessons.service';

@NgModule({
  declarations: [LessonsComponent, 
                LessonsDetailsComponent, 
                SelectedLessonComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [LessonsService],
  exports: [LessonsComponent]
})

export class LessonsModule {
}
