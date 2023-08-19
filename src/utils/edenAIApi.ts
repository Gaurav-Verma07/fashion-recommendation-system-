export const edenAIApi = async (prompt :string) => {
  const url = 'https://api.edenai.run/v2/image/generation';

  const headers = {
    authorization: `Bearer  YOUR_API_KEY`,
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
