import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface AboutPageProps {
    className?: string;
}

const AboutPage: FC<AboutPageProps> = () => {
  const { t } = useTranslation('about');

  return (
    <div className="app-page">
      {t('Страница о нас')}
    </div>
  );
};

export default AboutPage;
