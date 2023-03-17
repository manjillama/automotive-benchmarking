interface IFile {
	data: {
		attributes: {
			url: string;
		};
	};
}
export interface IProduct {
	id: number;
	attributes: {
		createdAt: string | Date;
		updatedAt: string | Date;
		name: string;
		media?: any;
		feature?: any;
		specifications?: any;
		cad?: IFile;
	};
}
