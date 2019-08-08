import * as React from 'react';
import { WithStyles, createStyles, Theme, withStyles, Button } from '@material-ui/core';
import { colors } from '../../common';

interface MenuButtonProps extends WithStyles<typeof styles> {
  text?: string;
  onClick: (event: any) => void;
}

const styles = (theme: Theme) =>
  createStyles({
    buttonStyle: {
      'border': '2px solid',
      'borderColor': colors.GREEN,
      'color': colors.GREEN,
      'textTransform': 'capitalize',
      'float': 'right',
      'display': 'flex',
      'marginBottom': theme.spacing.unit * 2,
      'marginRight': theme.spacing.unit,
      '&:hover': {
        backgroundColor: colors.GREEN,
        color: colors.YELLOW,
      },
    },
  });

const MenuButtonInner: React.FC<MenuButtonProps> = props => {
  const { children, text: label, classes } = props;

  return (
    <Button onClick={props.onClick} size="small" className={classes.buttonStyle} color="inherit">
      {children}
      {label}
    </Button>
  );
};

export const ButtonComponent = withStyles(styles)(MenuButtonInner);
