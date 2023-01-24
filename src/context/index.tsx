import { createContext, useState } from "react";
import { IProcedureObj } from "../data";

interface IGlobalContextProps {
	children: React.ReactNode;
}

interface IGlobalContext {
	currentProcedure: IProcedureObj | undefined;
	setCurrentProcedure: React.Dispatch<React.SetStateAction<IProcedureObj | undefined>>;
	sliderModal: boolean;
	setSliderModal: React.Dispatch<React.SetStateAction<boolean>>;
	textModal: boolean;
	setTextModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext({} as IGlobalContext);

export const GlobalProvider = ({ children }: IGlobalContextProps) => {
	const [currentProcedure, setCurrentProcedure] = useState<IProcedureObj | undefined>();
	const [sliderModal, setSliderModal] = useState<boolean>(false);
	const [textModal, setTextModal] = useState<boolean>(false);

	return (
		<GlobalContext.Provider
			value={{
				currentProcedure,
				setCurrentProcedure,
				sliderModal,
				setSliderModal,
				textModal,
				setTextModal,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
