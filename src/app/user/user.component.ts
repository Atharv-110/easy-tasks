import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserModel } from './user.model';
import { CardComponent } from '../ui/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //Old approach i.e. before signals
  @Input({ required: true }) user!: UserModel;
  @Input({ required: true }) isSelected!: boolean;
  @Output() select = new EventEmitter<string>();

  //New approach i.e. after signals
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelect = () => {
    this.select.emit(this.user.id);
  };
}
