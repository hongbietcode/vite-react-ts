import NumberUtils from '@src/utils/NumberUtils';
import { Form, InputNumber, InputNumberProps } from 'antd';
import { Fragment, memo } from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { IFormControlProps } from './type';
import ErrMessage from './ErrorMessage';

const InternalNumberInput = <TFieldValues extends FieldValues = FieldValues>({
    name,
    control,
    controlProps = {},
    wrapperProps = {},
    defaultValue,
    rules = {},
    step,
    min,
    max,
    precision,
    label,
    tooltip,
    className,
    readOnly,
    disabled,
}: IFormControlProps<InputNumberProps, TFieldValues> & {
    formatter?: (value?: any) => string;
    parser?: (displayValue?: any) => any;
    step?: number;
    precision?: number;
    min?: number;
    max?: number;
}) => {
    const { onChange: onForwardChange, ..._controlProps } = controlProps;

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
                        <InputNumber
                            disabled={disabled}
                            min={min}
                            max={max}
                            step={step}
                            precision={precision}
                            readOnly={readOnly}
                            title={NumberUtils.numberFormat(field.value)}
                            formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={(value) => value?.replace(/(,*)/g, '') as any}
                            onChange={(value) => {
                                onChange(value);
                                onForwardChange?.(value);
                            }}
                            className="w-full"
                            {...{ ..._controlProps, ...field }}
                        />
                        <ErrMessage errors={errors} name={name} />
                    </Fragment>
                </Form.Item>
            )}
        ></Controller>
    );
};

export default InternalNumberInput;
