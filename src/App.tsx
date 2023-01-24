import { GlobalProvider } from "./context";
import MainPage from "./page/index";
import Global from "./styles/global";

const App = () => {
	return (
		<>
			<Global />
			<GlobalProvider>
				<MainPage />
			</GlobalProvider>
		</>
	);
};

export default App;
