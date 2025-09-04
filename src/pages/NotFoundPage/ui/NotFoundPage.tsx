import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => (
  <div className={classNames(cls.NotFoundPage, {}, ['app-page', className])}>
    <h1>Page Not Found</h1>
  </div>
);
