
import AutorizationView from './view/AutorizationView/AutorizationView';
import MainView from './view/MainView/MainView';
import UserProfilProvider from './context/userprofil.context';
import UserProfilesProvider from './context/userprofiles.context';


function App() {
	return (
		<>
			<UserProfilesProvider>
				<UserProfilProvider>
					<MainView></MainView>
					<AutorizationView ></AutorizationView>
				</UserProfilProvider>
			</UserProfilesProvider>
		</>
	);
}

export default App;
