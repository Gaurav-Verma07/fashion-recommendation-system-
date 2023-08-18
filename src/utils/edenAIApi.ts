export const edenAIApi = async (prompt :string) => {
  const url = import.meta.env.VITE_EDENAI_URL;

  const headers = {
    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZDBjMDExNDMtNWEyOS00YmIzLWE3YzYtYTIwZGNiNDgzMjA4IiwidHlwZSI6ImFwaV90b2tlbiJ9.GR4zjUBVtCAFm6EgweAJCIT787aHNtcLfQHRO35mO4s`,
    'Content-Type': 'application/json',
  };
  const data = {
    providers: 'openai',
    text: prompt,
    resolution: '256x256',
    num_images: 10,
  };
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  });
  const resData = await response.json();
  return resData;
};
