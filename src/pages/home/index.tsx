import TP21 from '../testpage2'
import Loadable from 'react-loadable';
// import request from 'umi-request';
import './index.less'

// console.log(request)

const TP2 = Loadable({
  loader: () => import('../testpage2'),
  loading: () => <div>Loading</div>,
});

export default function HomePage() {
  return (
    <div>
      <h1 >HomePage</h1>
      <TP2 />
      {/* <TP21 /> */}
    </div>
  );
}
