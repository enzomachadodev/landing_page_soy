import { useState } from "react";
import { StyledCard } from "./style";

const Card = (proceObj) => {
	const [open, setOpen] = useState(false);
	return (
		<StyledCard key={proceObj.name} open={open}>
			<h1>{proceObj.name}</h1>
			<button onClick={() => setOpen(true)}>Ver mais</button>
			<div>
				<button onClick={() => setOpen(false)}>x</button>
				{proceObj.description.map((e) => (
					<p key={e}>{e}</p>
				))}
			</div>
		</StyledCard>
	);
};

export default Card;
