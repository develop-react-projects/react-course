import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { PageLoader } from 'widgets/PageLoader';

interface MainPageProps {
    className?: string;
}

const MainPage: FC<MainPageProps> = () => {
  const { t } = useTranslation('main');

  return (
    <div className="app-page">
      {t('Главная страница сайта')}
    </div>
  );
};

export default MainPage;
