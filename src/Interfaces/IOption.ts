import {FunctionComponent} from 'react';

export interface IOption {
  name: string;
  value: string;
  component: FunctionComponent;
  code: string;
}
