import { FC, useEffect, useState } from 'react';

interface BugButtonProps {
    className?: string;
}

export const BugButton: FC<BugButtonProps> = () => {
  const [error, setError] = useState(false);

  const onClickThrowErr = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <button onClick={onClickThrowErr} type="button">
      Throw error
    </button>
  );
};
