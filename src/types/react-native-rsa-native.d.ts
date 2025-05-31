declare module 'react-native-rsa-native' {
    export function generateKeys(keySize: number): Promise<{ private: string; public: string }>;
    export function encrypt(data: string, publicKey: string): Promise<string>;
    export function decrypt(encrypted: string, privateKey: string): Promise<string>;
  }
  