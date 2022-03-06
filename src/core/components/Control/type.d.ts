import { FormItemProps } from 'antd';
import { LabelTooltipType } from 'antd/lib/form/FormItemLabel';
import { Control, FieldPath, FieldPathValue, FieldValues, RegisterOptions, UnpackNestedValue } from 'react-hook-form';

export type IFormControlProps<
    TControlProps = any,
    TFieldValues extends FieldValues = FieldValues,
    TContext extends unknown = any,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
    wrapperProps?: FormItemProps;
    controlProps?: TControlProps;

    className?: string;

    control: Control<TFieldValues, TContext>;
    rules?: Omit<RegisterOptions<TFieldValues, TName>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;

    name: TName;
    defaultValue?: UnpackNestedValue<FieldPathValue<TFieldValues, TName>>;

    label?: string | JSX.Element;
    tooltip?: LabelTooltipType;
    children?: React.ReactNode;
    readOnly?: boolean;
    disabled?: boolean;
};
