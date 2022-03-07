import Control from '@core/components/Control';
import LoginModel from '@core/models/login.model';
import { Button, Form } from 'antd';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';

const resolver = classValidatorResolver(LoginModel);

const FormDemo: FC = () => {
    const { control, handleSubmit } = useForm<LoginModel>({ resolver });

    return (
        <Form className="w-96" layout="horizontal">
            <Control.Input control={control} name="username" />
            <Control.NumberInput min={0} control={control} name="password" />

            <Button
                type="primary"
                onClick={handleSubmit((data) => {
                    alert(JSON.stringify(data));
                })}
            >
                Submit
            </Button>
        </Form>
    );
};

export default FormDemo;
