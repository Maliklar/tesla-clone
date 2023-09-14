import { Component } from '@angular/core';
export enum MenuTypeEnum {
  vehicles,
  energy,
  charging,
  discover,
}
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  readonly menuType = MenuTypeEnum;
  menuItems = [
    {
      title: MenuTypeEnum.vehicles,
      active: false,
    },
    {
      title: MenuTypeEnum.energy,
      active: false,
    },
    {
      title: MenuTypeEnum.charging,
      active: false,
    },
    {
      title: MenuTypeEnum.discover,
      active: false,
    },
  ];
  hoverHandler(title: MenuTypeEnum) {
    const activeMenu = this.menuItems.find((i) => i.title === title);
    if (!activeMenu) return;
    activeMenu.active = true;

    this.menuItems.forEach((i) => {
      i.active = false;
      if (i.title === title) i.active = true;
    });

    console.log(this.menuItems);
  }
}
