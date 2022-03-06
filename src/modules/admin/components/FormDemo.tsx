import Control from '@core/components/Control';
import { Button, Form } from 'antd';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

type IFormData = {
    name: string;
    value: string;
};

const FormDemo: FC = () => {
    const { control, handleSubmit } = useForm<IFormData>();

    return (
        <Form className="w-96" layout="horizontal">
            <Control.Input control={control} name="name" rules={{ required: true }} />
            <Control.NumberInput min={0} control={control} name="value" rules={{ required: true }} />

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
