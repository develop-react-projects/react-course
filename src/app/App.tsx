import { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { BugButton } from 'app/providers/ErrorBoundary';
import { AppRouter } from './providers/AppRouter';
import { useTheme } from './providers/ThemeProvider';
import { Counter } from '../widgets/Counter';

export const App: FC = () => {
  const { theme } = useTheme();

  return (
    <Suspense fallback="">
      <div className={classNames('app', {}, [theme])}>
        <Counter />
        <Navbar />
        <BugButton />
        <div className="app__content">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
};
