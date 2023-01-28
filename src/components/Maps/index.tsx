import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { StyledMaps } from "./style";

interface IMapsProps {
	props: string;
}

const Maps = ({ props }: IMapsProps) => {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyDZNBjnmC8t4veQS_wmHw3TcX3GRhIXh30",
	});

	const ipanema = {
		position: {
			lat: -22.983823808328683,
			lng: -43.20732090456232,
		},
	};

	const recreio = {
		position: {
			lat: -23.02011998494957,
			lng: -43.48620493078297,
		},
	};

	const ponteNova = {
		position: {
			lat: -20.409511126807647,
			lng: -42.89505081791101,
		},
	};

	const position =
		props === "ipanema"
			? ipanema.position
			: props === "recreio"
			? recreio.position
			: ponteNova.position;

	return (
		<StyledMaps>
			{isLoaded ? (
				<GoogleMap
					mapContainerStyle={{ width: "100%", height: "100%" }}
					center={position}
					zoom={15}
				>
					<Marker
						position={position}
						options={{
							label: {
								text: "Dra. Soyrana Takenawa",
								className: "mapLabel",
							},
						}}
					/>
				</GoogleMap>
			) : (
				<></>
			)}
		</StyledMaps>
	);
};

export default Maps;
