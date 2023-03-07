import { useContext, useEffect, useRef } from 'react';
import { AppStoreContext } from '../stores';

export const useAppState = () => {
  return useContext(AppStoreContext);
};

export const useCleanupUserDataUnmount = () => {
  const { currentUser } = useAppState();
  const dontClearData = useRef<boolean>(false);

  const setCleanup = (value: boolean) => {
    dontClearData.current = !value;
  };

  useEffect(() => {
    return () => {
      if (!dontClearData.current) {
        currentUser.clear();
      }
    };
  }, []);

  return setCleanup;
};
