export interface IProduct {
	id: string | number;
	createdAt: string | Date;
	updatedAt: string | Date;
	name: string;
	media?: any;
	feature?: any;
	specifications?: any;
	cad?: any;
}
