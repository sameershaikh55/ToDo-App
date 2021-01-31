import React from "react";

// import icon
import DeleteIcon from "@material-ui/icons/Delete";

export const List = (props) => {
	return (
		<ul>
			<li className="list">
				<button
					className="pDeletebtn"
					onClick={() => {
						props.onSelect(props.id);
					}}
				>
					<DeleteIcon className="deleteBtn" />
				</button>
				{props.list}
			</li>
		</ul>
	);
};
