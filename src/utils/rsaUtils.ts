// utils/rsaUtils.ts
import RNRSA from 'react-native-rsa-native';

// Generate a key pair (2048-bit)
export const generateKeyPair = async () => {
  const keys = await RNRSA.generateKeys(2048);
  return {
    publicKey: keys.public,
    privateKey: keys.private, // Store this securely
  };
};

// Encrypt a message using a public key
export const encryptMessage = async (message: string, publicKey: string): Promise<string> => {
  return await RNRSA.encrypt(message, publicKey);
};

// Decrypt a message using a private key
export const decryptMessage = async (encryptedMessage: string, privateKey: string): Promise<string> => {
  return await RNRSA.decrypt(encryptedMessage, privateKey);
};
