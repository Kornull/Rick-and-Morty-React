import { FormInputsProps } from '../../types/types';

import styles from '../Form.module.scss';

const InputCheckbox = ({ register, error, onButtonClick }: FormInputsProps) => {
  return (
    <>
      <label className={styles.formBlockCheckbox}>
        I agree with the conditions
        <input
          type="checkbox"
          data-testid="checkbox-button"
          {...register('checkbox', { required: true, onChange: onButtonClick })}
        />
        {error && (
          <span className={styles.formBlockErrorText} data-testid="error-text">
            You must agree to the terms
          </span>
        )}
      </label>
    </>
  );
};

export default InputCheckbox;
