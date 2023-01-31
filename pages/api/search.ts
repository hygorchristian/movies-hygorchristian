import type { NextApiRequest, NextApiResponse } from 'next';
import TMDBApi from 'services/themoviedb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { q } = req.query;
  const results = await TMDBApi.search(q as string);

  return res.status(200).json(results);
}
 