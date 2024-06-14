import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Task } from '../../Task'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  @Input()
  task_item!: Task
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onUpdateReminderTask: EventEmitter<Task> = new EventEmitter()

  faTimes = faTimes
  onDelete(task: Task) {
    this.onDeleteTask.emit(task)
  };
  onToggle(task: Task) {
    this.onUpdateReminderTask.emit(task)
  }
}
