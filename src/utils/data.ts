import { OptionData } from '@/components/dashboard/OptionsCard';
import { SelectOptions } from '@/components/form/SelectInput';
import { Diff, LayoutGrid, LayoutPanelTop, Scale, Target, Warehouse } from 'lucide-react';
export const itemCardOptions: OptionData[] = [
	{
		title: 'Items',
		description: 'Items general description',
		icon: LayoutGrid,
		linkTitle: 'New Item',
		link: '/dashboard/inventory/items/new',
		enabled: true
	},
	{
		title: 'Categories',
		description: 'Organize items as per categories',
		icon: LayoutPanelTop,
		linkTitle: 'New Category',
		link: '/dashboard/inventory/categories/new',
		enabled: true
	},
	{
		title: 'Brands',
		description: 'Organize items as per brands',
		icon: Target,
		linkTitle: 'New Brand',
		link: '/dashboard/inventory/brands/new',
		enabled: true
	},
	{
		title: 'Warehouse',
		description: 'Manage storage locations',
		icon: Warehouse,
		linkTitle: 'New Warehouse',
		link: '/dashboard/inventory/warehouse/new',
		enabled: true
	},
	{
		title: 'Units',
		description: 'Manage units for products',
		icon: Scale,
		linkTitle: 'New Unit',
		link: '/dashboard/inventory/units/new',
		enabled: true
	},
	{
		title: 'Adjustments',
		description: 'Adjust inventory for orders and purchases',
		icon: Diff,
		linkTitle: 'Adjustment',
		link: '/dashboard/inventory/adjustments/new',
		enabled: true
	}
];

export const branchTypeSelectOptionsData: SelectOptions[] = [
	{ title: 'Branch', value: 'branch', selected: false },
	{ title: 'Main', value: 'main', selected: false }
];
export const itemSelectOptions: SelectOptions[] = [
	{ title: 'Maggie 250 gm', value: 'ajkdshhjsgdjhghagjdsjga', selected: false },
	{ title: 'Ramana', value: 'shfdijknvknjsiuhgfvbgvvchgvg', selected: false }
];
// sidebar
export const inventoryLinks = [
	{ title: 'Items', href: '/dashboard/inventory/items', newLink: true },
	{ title: 'Categories', href: '/dashboard/inventory/categories', newLink: true },
	{ title: 'Brands', href: '/dashboard/inventory/brands', newLink: true },
	{ title: 'Units', href: '/dashboard/inventory/units', newLink: true },
	{ title: 'Warehouse', href: '/dashboard/inventory/warehouse', newLink: true },
	{ title: 'Adjustments', href: '/dashboard/inventory/adjustments', newLink: false }
];
// for side bar
export const salesLinks = [
	{ title: 'Customers', href: '#' },
	{ title: 'Sales Orders', href: '#' },
	{ title: 'Packages', href: '#' },
	{ title: 'Shipments', href: '#' },
	{ title: 'Invoices', href: '#' },
	{ title: 'Sales Receipts', href: '#' },
	{ title: 'Payments Received', href: '#' },
	{ title: 'Sales Returns', href: '#' },
	{ title: 'Credit Notes', href: '#' }
];
// for side bar
export const purchaseLinks = [
	{ title: 'Items', href: '#' },
	{ title: 'Item Groups', href: '#' },
	{ title: 'Inventory Adjustments', href: '#' }
];

export const categoryData = [
	{ title: 'Electronics', value: 'asdfgr8489asdjhv', selected: false },
	{ title: 'Clothing', value: 'bsmfgr8489asdjhv', selected: false }
];
export const unitData = [
	{ title: 'Kilogram', value: 'kg', selected: false },
	{ title: 'Grams', value: 'gm', selected: false },
	{ title: 'Meter', value: 'm', selected: false },
	{ title: 'Feet', value: 'ft', selected: false },
	{ title: 'Piece', value: 'pcs', selected: false }
];
export const warehouseData = [
	{ title: 'Branch A', value: 'bcxbjhahsdndkjhsakhd', selected: false },
	{ title: 'Branch B', value: 'bcshdfgsjahsdndkjhsakhd', selected: false },
	{ title: 'Branch C', value: 'clofgsjahsdndkjhsakhd', selected: false },
	{ title: 'Main A', value: 'agdshgagjshdghagsjdgjh', selected: false },
	{ title: 'Main B', value: 'molpojcauahvardfv', selected: false },
	{ title: 'Main C', value: 'eewrrgwftxtsgtvyxyuyx', selected: false }
];
export const brandData = [
	{ title: 'HP', value: 'bcxbjhahsdndkjhsakhd', selected: false },
	{ title: 'Teer', value: 'bcshdfgsjahsdndkjhsakhd', selected: false },
	{ title: 'Tata', value: 'clofgsjahsdndkjhsakhd', selected: false }
];
export const supplierData = [
	{ title: 'Supplier A', value: 'bcxbjhahsdndkjhsakhd', selected: false },
	{ title: 'Supplier B', value: 'bcshdfgsjahsdndkjhsakhd', selected: false },
	{ title: 'Supplier C', value: 'clofgsjahsdndkjhsakhd', selected: false }
];
