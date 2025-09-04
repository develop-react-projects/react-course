import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const onClickReload = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <div>
        <h1 className={cls.PageError__heading}>Something went wrong</h1>
        <button className={cls.PageError__button} onClick={onClickReload} type="button">Reload page</button>
      </div>
    </div>
  );
};
