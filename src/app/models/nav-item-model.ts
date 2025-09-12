export interface NavItem {
    name: string;
    icon?: string;
    href?: string;
    external?: boolean;
    children?: NavItem[];
    disabled?: boolean;
    className?: string;
    activeClassName?: string;
}