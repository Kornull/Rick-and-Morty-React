import { FormInputsProps } from '../../types/types';

import styles from '../Form.module.scss';

const InputFirstName = ({ register, error, onButtonClick }: FormInputsProps) => {
  return (
    <>
      <label className={styles.labelContainer}>
        First name
        <input
          className={styles.formBlockInput}
          type="text"
          autoComplete="disabled"
          {...register('firstName', {
            required: true,
            onChange: onButtonClick,
            minLength: {
              value: 3,
              message: 'At least 3 characters',
            },
          })}
          data-testid="first-name"
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

export default InputFirstName;
