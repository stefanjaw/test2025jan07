import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users = [
    { name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
    { name: 'Mike Johnson', email: 'mike.johnson@example.com', role: 'Manager' },
    { name: 'Sarah Wilson', email: 'sarah.wilson@example.com', role: 'User' }
  ];
}