import { FC } from 'react';

interface CounterItemProps {
    name: string;
}

export const CounterItem: FC<CounterItemProps> = (props) => {
  const { name } = props;
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};
