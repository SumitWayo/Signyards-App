// src/api/auth.ts

const authKey = '431765AxRg7j4aVz567052b5bP1';
const templateId = '6703c95ad6fc05465d44e512';

export const sendOtp = async (phoneNumber: string) => {
  const url = `https://control.msg91.com/api/v5/otp?otp_expiry=1&template_id=${templateId}&mobile=91${phoneNumber}&authkey=${authKey}&realTimeResponse=1`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();
  return { success: response.ok && data.type === 'success', data };
};

export const verifyOtp = async (phoneNumber: string, otp: string) => {
  const verifyUrl = `https://control.msg91.com/api/v5/otp/verify?otp=${otp}&mobile=91${phoneNumber}&authkey=${authKey}`;

  const response = await fetch(verifyUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();
  return { success: response.ok && data.type === 'success', data };
};

export const registerUser = async (phoneNumber: string) => {
  const response = await fetch('https://signyards.com/admin/getAppUsers.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      type: 'addUser',
      phone: phoneNumber,
    }),
  });

  const data = await response.json();
  return { success: response.ok && data.success, data };
};
