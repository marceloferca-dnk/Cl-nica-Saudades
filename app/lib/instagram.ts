export interface InstagramMedia {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
}

interface InstagramResponse { data?: InstagramMedia[] }

export async function getInstagramMedia(limit = 12) {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;
  const version = process.env.INSTAGRAM_GRAPH_API_VERSION || "v24.0";
  if (!token || !userId) return null;

  const fields = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count";
  const url = new URL(`https://graph.facebook.com/${version}/${userId}/media`);
  url.searchParams.set("fields", fields);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("access_token", token);

  try {
    const response = await fetch(url, { next: { revalidate: 300 } });
    if (!response.ok) return null;
    const payload = await response.json() as InstagramResponse;
    return payload.data?.filter(item => item.permalink && (item.media_url || item.thumbnail_url)) ?? null;
  } catch {
    return null;
  }
}
