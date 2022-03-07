import { Checkbox, Form } from 'antd';
import { CheckboxProps } from 'antd/lib/checkbox';
import { Controller, FieldValues } from 'react-hook-form';
import { IFormControlProps } from './type';
import ErrMessage from './ErrorMessage';

type FormCheckBoxProps<TFieldValues> = IFormControlProps<CheckboxProps, TFieldValues> & {
    checkBoxLabel?: JSX.Element | string;
};

const InternalCheckBox = <TFieldValues extends FieldValues = FieldValues>({
    name,
    control,
    controlProps = {},
    wrapperProps = {},
    defaultValue,
    rules = {},
    label,
    checkBoxLabel,
    children,
    tooltip,
    className,
    readOnly,
    disabled,
}: FormCheckBoxProps<TFieldValues>) => {
    const { onChange: onForwardChange, ..._controlProps } = controlProps;

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={rules}
            render={({ field: { onChange, value, ...field }, formState: { errors } }) => (
                <Form.Item
                    className={className}
                    required={!!rules?.required}
                    name={name}
                    label={label}
                    tooltip={tooltip}
                    {...wrapperProps}
                >
                    <Checkbox
                        disabled={disabled}
                        onChange={(o) => {
                            if (readOnly) return;
                            onChange(o);
                            onForwardChange?.(o);
                        }}
                        checked={value}
                        {...{ ..._controlProps, ...field }}
                    >
                        {checkBoxLabel || children}
                    </Checkbox>
                    <ErrMessage defaultMessage="Vui lòng chọn vào ô này!" errors={errors} name={name} />
                </Form.Item>
            )}
        />
    );
};

export default InternalCheckBox;
