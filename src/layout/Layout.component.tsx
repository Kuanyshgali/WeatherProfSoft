import React from "react";
import type {FC} from 'react';
import styles from './layout.module.scss'

const Layout: FC<React.PropsWithChildren> = ({children}) => {

  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export {Layout};
