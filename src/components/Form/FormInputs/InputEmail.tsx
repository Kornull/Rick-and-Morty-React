import { FormInputsProps } from '../../types/types';
import { RegExpEmailValidation } from '../../template/constants';

import styles from '../Form.module.scss';

const InputEmail = ({ register, error, onButtonClick }: FormInputsProps) => {
  return (
    <>
      <label className={styles.labelContainer}>
        Email
        <input
          className={styles.formBlockInput}
          type="text"
          autoComplete="disabled"
          {...register('email', {
            required: true,
            onChange: onButtonClick,
            pattern: RegExpEmailValidation,
          })}
          data-testid="input-email"
        />
        {error && (
          <span className={styles.formBlockErrorText} data-testid="error-text">
            {'Enter email "ww@ww.ww"'}
          </span>
        )}
      </label>
    </>
  );
};

export default InputEmail;
