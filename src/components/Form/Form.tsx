import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { planetsArray } from '../template/constants';
import UserCards from '../Cards/UserCards';

import styles from './Form.module.scss';
import InputFirstName from './FormInputs/InputFirstName';
import InputLastName from './FormInputs/InputLastName';
import InputEmail from './FormInputs/InputEmail';
import InputGender from './FormInputs/InputGender';
import Select from './FormInputs/Select';
import InputLoadFile from './FormInputs/InputLoadFile';
import InputCheckbox from './FormInputs/InputCheckbox';

export type CardMenu = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  image: string;
  location: string;
};

export type StateFormUser = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  location: string;
  files: string;
  checkbox: boolean;
};
let userCards: CardMenu[] = [];

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<StateFormUser>({
    mode: 'onBlur',
  });
  const [image, setImage] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const isButtonFalse = () => {
    setButtonDisabled(false);
  };
  const isButtonTrue = () => {
    setButtonDisabled(true);
  };
  const fileLoad = (file: string) => {
    const newLinkImage = new Blob([file]);
    setImage(URL.createObjectURL(newLinkImage));
  };

  const onSubmit: SubmitHandler<StateFormUser> = (data): void => {
    if (data.files.length > 0) {
      fileLoad(data.files[0]);
    }
    userCards = [
      ...userCards,
      ...[
        {
          firstName: data.firstName.slice(0, 1).toUpperCase() + data.firstName.slice(1),
          lastName: data.lastName.slice(0, 1).toUpperCase() + data.lastName.slice(1),
          email: data.email,
          gender: data.gender,
          image: image,
          location: data.location,
        },
      ],
    ];

    reset();
  };

  useEffect(() => {
    if (image) userCards[userCards.length - 1].image = image;
    return () => setImage('');
  }, [image]);

  return (
    <>
      <div className={styles.formBlock}>
        <form
          className={styles.formBlockUseForm}
          onSubmit={handleSubmit(onSubmit)}
          data-testid="form-user"
        >
          <InputFirstName
            register={register}
            error={errors.firstName}
            onButtonClick={isButtonFalse}
          />
          <InputLastName
            register={register}
            error={errors.lastName}
            onButtonClick={isButtonFalse}
          />
          <InputEmail register={register} error={errors.email} onButtonClick={isButtonFalse} />
          <InputGender register={register} error={errors.gender} onButtonClick={isButtonFalse} />
          <Select register={register} options={planetsArray} onButtonClick={isButtonFalse} />
          <InputLoadFile register={register} watch={watch} onButtonClick={isButtonFalse} />
          <InputCheckbox
            register={register}
            error={errors.checkbox}
            onButtonClick={isButtonFalse}
          />
          <input
            type="submit"
            className={styles.formBlockButtonSubmit}
            disabled={buttonDisabled}
            data-testid="button-submit"
            onClick={() =>
              setTimeout(() => {
                isButtonTrue();
              }, 500)
            }
          />
        </form>
      </div>
      {userCards.length ? <UserCards cards={userCards} /> : null}
    </>
  );
};

export default Form;
