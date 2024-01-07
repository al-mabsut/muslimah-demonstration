import HelloWorld from '../../components/hello-world';
import style from './style.module.css';
// import { Indeterminate } from '../../../node_modules/@al-mabsut/muslimah/dist/esm/bundle.js';

export default function Home() {
	return (
		<div class={style.home}>
			<HelloWorld />
      {/* <Indeterminate scenario={'initial-bleeding'} /> */}
		</div>
	);
}