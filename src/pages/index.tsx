import styles from './index.less';
import request from 'umi-request';

function fetchTest() {
  console.log((window as any)?.a?.b?.c)
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
    </div>
  );
}
