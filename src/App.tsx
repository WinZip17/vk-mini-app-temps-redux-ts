import React, { useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import Root from "@vkontakte/vkui/dist/components/Root/Root";
import * as Actions from './store/actions';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home';
import Persik from './panels/Persik';
import {useDispatch} from "react-redux";
import { useSelector } from './types/main'


const App = (): JSX.Element => {

	const dispatch = useDispatch();

	const fetchedUser = useSelector(main => main.main.fetchedUser);
	const activePanel = useSelector(main => main.main.activePanel);
	const activeView = useSelector(main =>  main.main.activeView );
	const popout = useSelector(main => main.main.popout );

	useEffect(() => {
		bridge.subscribe((event: any): void => {
			const type: string = event.detail.type;
			const data: any  = event.detail.data;
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		})
		dispatch(Actions.setUserData())
	}, [dispatch])

	const go = (e: any): void => {
		dispatch(Actions.setActivePanel(e.currentTarget.dataset.to))
	};

	return (
		<Root activeView={activeView}>
			<View id='homeView' activePanel={activePanel} popout={popout}>
				<Home id='home' fetchedUser={fetchedUser} go={go} />
				<Persik id='persik' go={go} />
			</View>
		</Root>
	);
}

export default App;

