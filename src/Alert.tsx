import { useEffect } from 'react';
import { AlertProps } from "./props";

const Alert = ({ type, msg, removeAlert, list } : AlertProps) => {
	useEffect(() => {
		const timeout = setTimeout(() => {
			removeAlert();
		}, 3000);
		return () => clearTimeout(timeout);
	}, [list, removeAlert]);
	return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
