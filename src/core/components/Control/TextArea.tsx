import { Form } from 'antd';
import TextArea, { TextAreaProps } from 'antd/lib/input/TextArea';
import { Fragment, memo } from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import ErrMessage from './ErrorMessage';
import { IFormControlProps } from './type';

const InternalTextArea = <TFieldValues extends FieldValues = FieldValues>({
    name,
    control,
    controlProps = {},
    wrapperProps = {},
    defaultValue,
    rules = {},

    label,
    tooltip,
    className,
    readOnly,
    disabled,
}: IFormControlProps<TextAreaProps, TFieldValues>) => {
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
                        <TextArea
                            disabled={disabled}
                            readOnly={readOnly}
                            rows={5}
                            onChange={(e) => {
                                onChange(e.currentTarget.value);
                                onForwardChange && onForwardChange(e);
                            }}
                            {...{ ..._controlProps, ...field }}
                        />
                        <ErrMessage errors={errors} name={name} />
                    </Fragment>
                </Form.Item>
            )}
        ></Controller>
    );
};

export default InternalTextArea;
