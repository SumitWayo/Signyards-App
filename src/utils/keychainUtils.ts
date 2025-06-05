// src/utils/keychainUtils.ts
import * as Keychain from 'react-native-keychain';

export const storePrivateKey = async (userId: string, privateKey: string): Promise<void> => {
  await Keychain.setGenericPassword(userId, privateKey, {
    service: `privateKey-${userId}`,
  });
};

export const getPrivateKey = async (userId: string): Promise<string | null> => {
  const credentials = await Keychain.getGenericPassword({ service: `privateKey-${userId}` });
  return credentials ? credentials.password : null;
};

export const clearPrivateKey = async (userId: string): Promise<void> => {
  await Keychain.resetGenericPassword({ service: `privateKey-${userId}` });
};
