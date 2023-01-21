import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import MuiButton from '@mui/material/Button';

type ButtonProps = MuiButtonProps & {
  leftComponent?: JSX.Element;
  rightComponent?: JSX.Element;
  children: string | JSX.Element;
};

export default function Button({
  children,
  leftComponent,
  rightComponent,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <MuiButton
      {...props}
      sx={{
        paddingLeft: 3,
        paddingRight: 3,
        fontWeight: 'bold',
        borderRadius: 100,
        ...(props.sx || {})
      }}
    >
      {leftComponent}
      {children}
      {rightComponent}
    </MuiButton>
  );
}
