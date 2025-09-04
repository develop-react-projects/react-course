import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapse, setCollapse] = useState(false);

  const onToggleCollapse = () => {
    setCollapse((prev) => !prev);
  };

  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapse }, [className])}>
      <Button
        data-testid="sidebar-toggler"
        className={cls.Sidebar__toggler}
        onClick={onToggleCollapse}
      >
        Toggle
      </Button>
      <LangSwitcher />
    </div>
  );
};
