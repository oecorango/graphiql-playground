export interface PrivateRouteProps {
  path?: string;
  element: JSX.Element;
}

export type OptionsRequest = 'var' | 'headers';
export interface RequestOptionsVisible {
  visible: OptionsRequest;
}
