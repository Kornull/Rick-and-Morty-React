import { FormInputsProps } from '../../types/types';

import styles from '../Form.module.scss';

const InputLastName = ({ register, error, onButtonClick }: FormInputsProps) => {
  return (
    <>
      <label className={styles.labelContainer}>
        Last name
        <input
          className={styles.formBlockInput}
          type="text"
          autoComplete="disabled"
          {...register('lastName', {
            required: true,
            onChange: onButtonClick,
            minLength: {
              value: 3,
              message: 'At least 3 characters',
            },
          })}
          data-testid="last-name"
        />
        {error && (
          <span className={styles.formBlockErrorText} data-testid="error-text">
            {error.message || 'Please fill in the field'}
          </span>
        )}
      </label>
    </>
  );
};

export default InputLastName;
