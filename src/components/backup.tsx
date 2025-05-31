
import React, { useEffect } from 'react';
import { generateKeyPair, encryptMessage, decryptMessage } from '../utils/rsaUtils';

useEffect(() => {
    const doEncryption = async () => {
      try {
        console.log("Inside doEncryption");
  
        const { publicKey, privateKey } = await generateKeyPair();
        console.log('Generated Keys:', { publicKey, privateKey });
  
        const message = 'Hello, Ashwani!';
        const encrypted = await encryptMessage(message, publicKey);
        const decrypted = await decryptMessage(encrypted, privateKey);
  
        console.log('Original:', message);
        console.log('Encrypted:', encrypted);
        console.log('Decrypted:', decrypted);
      } catch (error) {
        console.error('Encryption Error:', error);
      }
    };
  
    doEncryption();
  }, []);