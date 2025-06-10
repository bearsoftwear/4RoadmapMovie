import fs from 'fs/promises';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, Calendar, Clock, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

async function getMovies() {
  const filePath = path.join(process.cwd(), 'data', 'movies.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}
export async function generateStaticParams() {
  const movies = await getMovies();
  return movies.map((movie) => ({
    id: movie.id.toString(),
  }));
}

async function getMovie(id) {
  const movies = await getMovies();
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  const movie = movies.find((m) => m.id === Number.parseInt(id));
  return movie || null;
}

export default async function MoviePage({ params }) {
  const { id } = params;
  const movie = await getMovie(id);
  if (!movie) {
    return <>Movie not found</>;
  }
  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section with Backdrop */}
        <div className="relative h-96 overflow-hidden">
          <Image
            src={movie.posterLink || '/placeholder.svg'}
            alt={movie.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="mb-4 text-white hover:bg-white/20"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Movies
                </Button>
              </Link>
              <Link href="/movies/ssr/[id]" as={`/movies/ssr/${movie.id}`}>
                <Button
                  variant="ghost"
                  className="bg-red-600 text-white animate-pulse"
                >
                  <Zap className="w-3 h-3 mr-1" />
                  SSR
                </Button>
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                {movie.title}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                {movie.description}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Movie Poster */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                    <Image
                      src={movie.posterLink || '/placeholder.svg'}
                      alt={movie.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Movie Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Movie Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-4">
                    Movie Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">
                        <strong>Year:</strong> {movie.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">
                        <strong>Duration:</strong> {movie.duration}m
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm">
                        <strong>Rating:</strong> {movie.rating}/10
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">
                        <strong>Director:</strong> {movie.director}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Genres</h3>
                    <div className="flex flex-wrap gap-2">{movie.genre}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Plot */}
              <Card>
                <CardHeader>
                  <CardTitle>Plot</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {movie.plot}
                  </p>
                </CardContent>
              </Card>

              {/* Cast */}
              <Card>
                <CardHeader>
                  <CardTitle>Cast</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {movie.cast}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
