import { ErrorMessage } from '@hookform/error-message';
import { DeepPartial, FieldPath, FieldValues, DeepMap, FieldError } from 'react-hook-form';

type ErrMessageProps<TFieldValues> = {
    defaultMessage?: string;
    name: FieldPath<TFieldValues>;
    errors: DeepMap<DeepPartial<TFieldValues>, FieldError>;
};

const ErrMessage = <TFieldValues extends FieldValues = FieldValues>({
    errors,
    name,
    defaultMessage = 'Trường này không được để trống!',
}: ErrMessageProps<TFieldValues>) => {
    return (
        <ErrorMessage
            errors={errors}
            name={name as any}
            render={({ message }) => (
                <div className="ant-form-item-explain ant-form-item-explain-error">
                    <div role="alert">{message || defaultMessage}</div>
                </div>
            )}
        />
    );
};

export default ErrMessage;
