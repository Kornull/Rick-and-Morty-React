import { FormInputsProps } from '../../types/types';

import styles from '../Form.module.scss';

const InputGender = ({ register, error, onButtonClick }: FormInputsProps) => {
  return (
    <>
      <div className={styles.formBlockGender}>
        <label className={styles.formBlockLabel} data-testid="input-gender">
          Female
          <input
            className={styles.formBlockInput}
            type="radio"
            autoComplete="disabled"
            value="female"
            {...register('gender', { required: true, onChange: onButtonClick })}
            data-testid="gender-female"
          />
          Male
          <input
            className={styles.formBlockInput}
            type="radio"
            autoComplete="disabled"
            value="male"
            {...register('gender', { required: true, onChange: onButtonClick })}
            data-testid="gender-male"
          />
        </label>
        {error && (
          <span className={styles.formBlockErrorText} data-testid="error-text">
            Please select a value
          </span>
        )}
      </div>
    </>
  );
};

export default InputGender;
