export interface DropdownLink {
    title: string;
    iconClass?: string;
    routerLink?: string;
}

export enum NavItemType {
    Sidebar = 1,
    NavbarLeft = 2,
    NavbarRight = 3
}

export interface NavItem {
    type: NavItemType;
    title: string;
    routerLink?: string;
    iconClass?: string;
    numNotifications?: number;
    dropdownItems?: (DropdownLink | 'separator')[];
}
