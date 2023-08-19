export const edenAIApi = async (prompt :string) => {
  const url = 'https://api.edenai.run/v2/image/generation';

  const headers = {
    authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYTJkODk5MDMtNjFkMy00ZGI1LTg2ZWUtZjQ1MGJhYzUyNTRmIiwidHlwZSI6ImFwaV90b2tlbiJ9.Q934XlpwL9j_GRi2NZqRMFD3tf4v0kDL5dgBRU3Oqms`,
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
