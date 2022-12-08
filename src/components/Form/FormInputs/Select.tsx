import { UseFormRegister } from 'react-hook-form';
import { StateFormUser } from '../Form';

import styles from '../Form.module.scss';

type SelectProps = {
  options: string[];
  register: UseFormRegister<StateFormUser>;
  onButtonClick: () => void;
};

const Select = ({ options, register, onButtonClick }: SelectProps) => {
  return (
    <>
      <select
        className={styles.formBlockSelect}
        {...register('location', { onChange: onButtonClick })}
      >
        <option>Unknown</option>
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
