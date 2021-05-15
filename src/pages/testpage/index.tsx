import Loadable from 'react-loadable';
import './index.less'

const TP2 = Loadable({
  loader: () => import('../testpage2'),
  loading: () => <div>Loading</div>,
});

export default function HomePage() {
  return (
    <div>
      <h1 >TestPage</h1>
      <TP2 />
    </div>
  );
}
