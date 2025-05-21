// utils/sendOtp.ts

export async function sendOtp(mobile: string, authKey: string, templateId: string) {
  const url = `https://control.msg91.com/api/v5/otp?otp_expiry=1&template_id=${templateId}&mobile=${mobile}&authkey=${authKey}&realTimeResponse=1`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.status === 200 && data.type === "success") {
      return { success: true, data };
    } else {
      console.error("MSG91 Error:", data);
      return { success: false, error: data.message || "Failed to send OTP" };
    }
  } catch (error: any) {
    console.error("Request Error:", error.message);
    return { success: false, error: "Request failed", details: error.message };
  }
}
