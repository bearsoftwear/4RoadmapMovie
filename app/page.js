// https://v0.dev/chat/mastering-next-js-routes-pDAsiXD7Q5N
import Image from 'next/image';
import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Calendar, Clock } from 'lucide-react';

async function getMovies() {
  const filePath = path.join(process.cwd(), 'data', 'movies.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

export default async function Home() {
  const movies = await getMovies();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center">🎬 Movie Catalog</h1>
          <p className="text-muted-foreground text-center mt-2">
            Discover amazing movies with dynamic routing and data fetching
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <Link key={movie.id} href={`/movies/${movie.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="p-0">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
                    <Image
                      src={movie.posterLink}
                      alt={movie.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">{movie.title}</CardTitle>
                  <CardDescription className="text-sm mb-3 line-clamp-2">
                    {movie.description}
                  </CardDescription>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {movie.releaseYear}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {movie.duration}m
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {movie.rating}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {/* {movie.genre.map((g) => (
                  <Badge key={g} variant="secondary" className="text-xs">
                    {g}
                  </Badge>
                ))} */}
                    <Badge variant="secondary" className="text-xs">
                      {movie.genre}
                    </Badge>
                  </div>
                </CardContent>
              </Card>{' '}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
