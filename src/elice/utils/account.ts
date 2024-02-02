import { useStore } from 'zustand';

import { __eliceinternal_account_store__ } from './_stores/_account';

/**
 * A hook that returns the current account.
 */
export const useEliceAccount = () => useStore(__eliceinternal_account_store__);
