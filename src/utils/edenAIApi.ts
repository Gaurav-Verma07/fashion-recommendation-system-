export const edenAIApi = async (prompt :string) => {
  const url = 'https://api.edenai.run/v2/image/generation';

  const headers = {
    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZmRhYTJmZWYtZGQ4YS00YzEzLTg2ODQtMTcyNDZlYmFjMzUwIiwidHlwZSI6ImFwaV90b2tlbiJ9.CKKPTqQoWRsuDa-utb7fGcG2qP-sL89HUIFIS3JiNA4`,
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
