import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Task } from '../Task'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
  private url = "http://localhost:5000/tasks"
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url)
  }
  deleteTask(task: Task): Observable<Task[]> {
    return this.http.delete<Task[]>(`${this.url}/${task.id}`)
  }
  updateReminder(task: Task): Observable<Task[]> {
    return this.http.put<Task[]>(`${this.url}/${task.id}`, task, httpOptions)
  }
}
