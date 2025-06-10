import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';

async function getMovies() {
  const filePath = path.join(process.cwd(), 'data', 'movies.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

export default async function MoviePage({ params }) {
  const { id } = params;
  const movies = await getMovies();  
    const movie = movies.find((m) => String(m.id) === String(id));
if (!movie) {
    return <>Movie not found</>;
  }
  return (<><h1>{movie.title} {movie.releaseYear}</h1>
      <p>{movie.description}</p>
      <p>{movie.releaseYear}</p>
      <Image
        src={movie.posterLink}
        alt={movie.title}
        width={300}
        height={450}
        className="object-cover rounded-lg" />
      </>
  );
}