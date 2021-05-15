import { IRouteComponentProps, Link } from 'umi'

export default function Layout({ children, location, route, history, match }: IRouteComponentProps) {
  return <>
    <div>
      <Link to='/index'>index</Link>
      <Link style={{marginLeft: 100}} to='/home'>home</Link>
      <Link style={{marginLeft: 100}} to='/testpage'>testpage</Link>
      <Link style={{marginLeft: 100}} to='/testpage2'>testpage</Link>
    </div>
    {children}
    </>
}
