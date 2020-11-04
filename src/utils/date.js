import dayjs from "dayjs";


export const groupByDate = (array) =>
	array.reduce((objectsByKeyValue ,obj) => {
		const value = dayjs(obj.created_at).format("DD/MM/YYYY");
		objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
		return objectsByKeyValue;
	}, {});
