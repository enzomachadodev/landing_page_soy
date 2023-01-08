import { useState } from "react";
import CloseButton from "react-bootstrap/CloseButton";
import { StyledCard } from "./style";

const Card = (proceObj) => {
	const [open, setOpen] = useState(false);

	return (
		<StyledCard key={proceObj.name} open={open}>
			<div className="title" data-aos="fade-up" foto={proceObj.img}>
				<div className="titleBox">
					<h1 className="proceduresTitle">{proceObj.name}</h1>
					<button onClick={() => setOpen(true)}>Ver mais</button>
				</div>
				<img src={proceObj.img} alt="" />
			</div>

			<div className="description">
				<div className="descriptionContainer">
					<CloseButton onClick={() => setOpen(false)} variant="white" />
					{proceObj.description.map((e) => (
						<p key={e} className="proceduresDescription">
							{e}
						</p>
					))}
				</div>
			</div>
		</StyledCard>
	);
};

export default Card;
