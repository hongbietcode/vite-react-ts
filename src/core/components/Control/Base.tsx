import { Form, FormItemProps } from 'antd';
import { LabelTooltipType } from 'antd/lib/form/FormItemLabel';
import { FC } from 'react';

type BaseProps = {
    label?: string | React.ReactNode;
    tooltip?: LabelTooltipType;
    children?: React.ReactNode;
    containerProps?: FormItemProps;
    className?: string;
    name?: string;
    required?: boolean;
};

const InternalBase: FC<BaseProps> = ({ containerProps, ...props }) => {
    return <Form.Item {...{ ...containerProps, ...props }} />;
};

export default InternalBase;
