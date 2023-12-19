import { EDENAI } from "../enums/eden";

export const edenAIApi = async (prompt: string) => {
  const url = "https://api.edenai.run/v2/image/generation";

  const headers = {
    authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMWE4MDU4NzEtNWNlOC00NGU0LTgxNzEtMWRhM2NmZGIyNmM3IiwidHlwZSI6ImFwaV90b2tlbiJ9.Pdaf08Or7PG2N10aji2-mv2Qa7c99bfAhqRyDnKoEwU`,
    "Content-Type": "application/json",
  };
  const data = {
    providers: EDENAI.PROVIDERS,
    text: prompt,
    resolution: EDENAI.RESOLUTION,
    num_images: EDENAI.NUM_IMAGES,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });
    const resData = await response.json();
    return resData;
  } catch (err) {
    console.log(err);
  }
};
