import {IOption} from './IOption';

export interface IComponent {
  name: string;
  title: string;
  description: string;
  documentationUrl: string;
  options: IOption[];
}
