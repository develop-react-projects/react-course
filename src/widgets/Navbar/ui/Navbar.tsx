import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <ThemeSwitcher className={cls.Navbar__theme} />
    <div className={cls.Navbar__links}>
      <AppLink
        theme={AppLinkTheme.INVERTED}
        className={cls.Navbar__link}
        to="/"
      >
        Main Page
      </AppLink>
      <AppLink
        theme={AppLinkTheme.INVERTED}
        className={cls.Navbar__link}
        to="/about"
      >
        About Page
      </AppLink>
    </div>
  </div>
);
