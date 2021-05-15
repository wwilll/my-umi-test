import { IRouteComponentProps } from 'umi';

export default function SettingLayout({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  // console.log(children);
  return (
    <div style={{ border: '1px solid red' }}>
      SettingLayout Wrapper
      {children}
    </div>
  );
}
