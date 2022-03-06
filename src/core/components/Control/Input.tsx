import { Form, Input, InputProps } from 'antd';
import { Fragment, memo, useMemo } from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { IFormControlProps } from './type';
import ErrMessage from './ErrorMessage';

const InternalInput = <TFieldValues extends FieldValues = FieldValues>({
    name,
    control,
    controlProps = {},
    wrapperProps = {},
    defaultValue,
    rules = {},

    label,
    tooltip,
    type = 'text',
    className,
    readOnly,
    disabled,
}: IFormControlProps<InputProps, TFieldValues> & { type?: 'text' | 'password' | 'search' }) => {
    const { onChange: onForwardChange, ..._controlProps } = controlProps;

    const InputControl = useMemo(
        () => (type === 'search' ? Input.Search : type === 'password' ? Input.Password : Input),
        [type]
    );

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={rules}
            render={({ field: { onChange, ...field }, formState: { errors } }) => (
                <Form.Item
                    className={className}
                    required={!!rules?.required}
                    name={name}
                    label={label}
                    tooltip={tooltip}
                    {...wrapperProps}
                >
                    <Fragment>
                        <InputControl
                            disabled={disabled}
                            readOnly={readOnly}
                            title={type != 'password' ? field.value : undefined}
                            allowClear
                            onChange={(e) => {
                                onChange(e.currentTarget.value);
                                onForwardChange?.(e);
                            }}
                            {...{ ..._controlProps, ...field }}
                        />
                        <ErrMessage errors={errors} name={name} />
                    </Fragment>
                </Form.Item>
            )}
        />
    );
};

export default InternalInput;
