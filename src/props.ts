import { GroceryItem } from "./interfaces";

export interface AlertProps {
	show: boolean;
	msg: string;
	type: string;
	list: GroceryItem[];
	removeAlert: () => void;
}

export interface GroceryListProps {
	items: GroceryItem[];
	removeItem: (id: string) => void;
	editItem: (id: string) => void;
}
