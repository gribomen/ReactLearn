import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AutorizationView from './view/AutorizationView/AutorizationView.tsx';
import UserProfilesProvider from './context/userprofiles.context.tsx';
import UserProfileProvider from './context/userprofil.context.tsx';
import ErrorView from './view/ErrorView/ErrorView.tsx';
import FavoriteView from './view/FavoriteView/FavoriteView.tsx';
import CardFilmView from './view/CardFilmView/CardFilmView.tsx';
import Layout from './layout/Layout.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/login',
				element: <AutorizationView />
			},
			{
				path: '/favorites',
				element: <FavoriteView />
			},
			{
				path: '/movie/:id',
				element: <CardFilmView />
			}
		]
	},
	{
		path: '*',
		element: <ErrorView />
	}
]);
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<UserProfilesProvider>
			<UserProfileProvider>
				<RouterProvider router={router}>
				</RouterProvider>
			</UserProfileProvider>
		</UserProfilesProvider>
	</StrictMode>
);
