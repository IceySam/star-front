export interface Profile { 
    name: string;
    image?: string;
}

export interface Menu {
    icon: string;
    text: string;
    tag?: string;
    color?: string;
    active?: boolean;
}

export interface AppInfo {
    title: string;
    logo: string;
    name: string;
    image: string;
    menu: Menu[];
    sideMenu: Menu[];
    link: string;
    information: Info[];
    callback: () => void;
}

export interface Info {
    title: string;
    description: string;
}