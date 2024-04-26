export const fetchData = async ({url, method, payload,token}) => {
  const formData = new FormData();
  for (const key in payload) {
    formData.append(key, payload[key]);
  }
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
      },
      body: method === "GET" ? undefined : formData,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const setAuthCookie = (token) => {
  const maxAge = 24 * 60 * 60; // Max age in seconds (1 day)
  const expires = new Date(Date.now() + maxAge * 1000).toUTCString();
  document.cookie = `token=${encodeURIComponent(
    token
  )}; expires=${expires}; path=/; SameSite=Strict; Secure`;
};
