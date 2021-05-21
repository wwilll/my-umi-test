import styles from './index.less';
import request from 'umi-request';
import PieChart from '@/components/PieChart';

import Loadable from 'react-loadable';

function fetchTest() {
  console.log((window as any)?.a?.b?.c);
  request
    .post('/api/users/create')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <button onClick={() => fetchTest()}>fetch</button>
      <PieChart title="已收" color="red" ratio={0.4} />
    </div>
  );
}
