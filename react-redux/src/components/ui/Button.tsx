import { Button as AntButton } from 'antd';
import type { ButtonProps } from 'antd';
import classNames from 'classnames';

interface CustomButtonProps extends ButtonProps {
  className?: string;
}

const Button = ({ className, children, ...props }: CustomButtonProps) => {
  return (
    <AntButton className={classNames('btn-custom', className)} {...props}>
      {children}
    </AntButton>
  );
};

export default Button;
