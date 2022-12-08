import { FieldError, UseFormRegister } from 'react-hook-form';
import { StateFormUser } from '../Form/Form';

export type AboutCard = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin?: {
    name: string;
    url: string;
  };
  location?: {
    name: string;
    url: string;
  };
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
};

export enum ENDPOINTS {
  character = 'https://rickandmortyapi.com/api/character/',
}

export type FormInputsProps = {
  register: UseFormRegister<StateFormUser>;
  error?: FieldError;
  onButtonClick?: () => void;
};
