import axios from "axios";

interface getShortUrl {
  data: {
    createdAt: string;
    originalUrl: string;
    shortUrl: string;
    title: string;
    totalClicks: number;
    updatedAt: string;
  };
  errors: { errorCode: string; errorMessage: string };
}

export const getShortUrl = (originalUrl: string) => {
  return axios.post<getShortUrl>("https://api.urlo.in/api/short-url", {
    originalUrl,
  });
};
