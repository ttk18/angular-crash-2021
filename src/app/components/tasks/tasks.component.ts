import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TaskService } from '../../services/task.service'
import { Task } from '../../Task'
import { TaskItemComponent } from '../../components/task-item/task-item.component'
import { AddTaskComponent } from '../../components/add-task/add-task.component'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {


  tasks: Task[] = []
  constructor(private taskService: TaskService) { }
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks)
  }
  handleDeleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id))
  }
  handleUpdateReminderTask(task: Task) {
    task.reminder = !task.reminder
    this.taskService.updateReminder(task).subscribe()
  }
}
