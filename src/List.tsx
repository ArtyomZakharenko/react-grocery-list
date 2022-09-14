import { FaEdit, FaTrash } from 'react-icons/fa';
import { GroceryItem } from "./interfaces";
import { GroceryListProps } from "./props";


const List = ({ items, removeItem, editItem }: GroceryListProps) => {
	return (
		<div className='grocery-list'>
			{items.map((item: GroceryItem) => {
				const { id, title } = item;
				return (
					<article className='grocery-item' key={id}>
						<p className='title'>{title}</p>
						<div className='btn-container'>
							<button
								type='button'
								className='edit-btn'
								onClick={() => editItem(id)}
							>
								<FaEdit />
							</button>
							<button
								type='button'
								className='delete-btn'
								onClick={() => removeItem(id)}
							>
								<FaTrash />
							</button>
						</div>
					</article>
				);
			})}
		</div>
	);
};

export default List;
