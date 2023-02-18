import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
const useFirestoreCollection = (collectionName, condition) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		let database = db.collection(collectionName).orderBy('createdAt');
		const unsubscribe = database
			.onSnapshot((snapshot) => {
				const updatedData = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setData(updatedData);
			});
		if (condition) {
			if (!condition.compareValue || !condition.compareValue.length) {
				// reset documents data
				setData([]);
				return;
			}

			database = database.where(
				condition.fieldName,
				condition.operator,
				condition.compareValue
			);
		}

		return unsubscribe;
	}, [collectionName]);

	return data;
};

export default useFirestoreCollection;