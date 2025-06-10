import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Zap, Database, RefreshCw } from 'lucide-react';

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Movies
            </Button>
          </Link>
          <h1 className="text-4xl font-bold">Data Fetching Comparison</h1>
          <p className="text-muted-foreground mt-2">
            Understanding the differences between Static Generation and
            Server-Side Rendering
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Static Generation */}
          <Card className="border-green-200 bg-green-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-green-600" />
                Static Generation (SSG)
              </CardTitle>
              <CardDescription>
                Pages are pre-built at build time and served from CDN
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">How it works:</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Pages are generated at build time</li>
                  <li>• HTML is cached and served from CDN</li>
                  <li>• Uses generateStaticParams() for dynamic routes</li>
                  <li>• Data is fetched once during build</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Best for:</h3>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary">Marketing pages</Badge>
                  <Badge variant="secondary">Blog posts</Badge>
                  <Badge variant="secondary">Product catalogs</Badge>
                  <Badge variant="secondary">Documentation</Badge>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Pros:</h3>
                <ul className="text-sm space-y-1 text-green-700">
                  <li>• ⚡ Extremely fast loading</li>
                  <li>• 🌍 Great SEO</li>
                  <li>• 💰 Cost-effective</li>
                  <li>• 🔒 Secure</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Cons:</h3>
                <ul className="text-sm space-y-1 text-red-700">
                  <li>• 📊 Data can become stale</li>
                  <li>• 🔄 Requires rebuild for updates</li>
                  <li>• ⏱️ Build time increases with pages</li>
                </ul>
              </div>

              <Link href="/movies/1">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  View SSG Example
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Server-Side Rendering */}
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-600" />
                Server-Side Rendering (SSR)
              </CardTitle>
              <CardDescription>
                Pages are rendered on each request with fresh data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">How it works:</h3>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Pages are rendered on each request</li>
                  <li>• Data is fetched on every page load</li>
                  <li>• HTML is generated server-side</li>
                  <li>• Fresh data on every visit</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Best for:</h3>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary">User dashboards</Badge>
                  <Badge variant="secondary">Real-time data</Badge>
                  <Badge variant="secondary">Personalized content</Badge>
                  <Badge variant="secondary">Live feeds</Badge>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Pros:</h3>
                <ul className="text-sm space-y-1 text-blue-700">
                  <li>• 🔄 Always fresh data</li>
                  <li>• 👤 Personalized content</li>
                  <li>• 🌍 Good SEO</li>
                  <li>• 🔐 Secure server-side logic</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Cons:</h3>
                <ul className="text-sm space-y-1 text-red-700">
                  <li>• 🐌 Slower than static</li>
                  <li>• 💸 Higher server costs</li>
                  <li>• 📈 Scales with traffic</li>
                  <li>• ⚡ Requires server resources</li>
                </ul>
              </div>

              <Link href="/movies/ssr/1">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  View SSR Example
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Table */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCw className="w-5 h-5" />
              Side-by-Side Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Feature</th>
                    <th className="text-left p-2">Static Generation (SSG)</th>
                    <th className="text-left p-2">
                      Server-Side Rendering (SSR)
                    </th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b">
                    <td className="p-2 font-medium">Performance</td>
                    <td className="p-2 text-green-700">
                      ⚡ Fastest (CDN cached)
                    </td>
                    <td className="p-2 text-yellow-700">
                      🔄 Fast (server rendered)
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Data Freshness</td>
                    <td className="p-2 text-yellow-700">📊 Build-time data</td>
                    <td className="p-2 text-green-700">🔄 Real-time data</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">SEO</td>
                    <td className="p-2 text-green-700">🌍 Excellent</td>
                    <td className="p-2 text-green-700">🌍 Excellent</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Cost</td>
                    <td className="p-2 text-green-700">💰 Low (CDN only)</td>
                    <td className="p-2 text-red-700">
                      💸 Higher (server costs)
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Scalability</td>
                    <td className="p-2 text-green-700">📈 Excellent</td>
                    <td className="p-2 text-yellow-700">
                      📊 Good (server dependent)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Use Case</td>
                    <td className="p-2">Static content, catalogs</td>
                    <td className="p-2">Dynamic content, dashboards</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Code Examples */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-700">
                SSG Implementation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-xs bg-muted p-4 rounded overflow-x-auto">
                {`// Generate static params at build time
export async function generateStaticParams() {
  return movies.map((movie) => ({
    id: movie.id.toString(),
  }))
}

// Fetch data at build time
async function getMovie(id: string) {
  const movie = movies.find(m => m.id === parseInt(id))
  return movie || null
}

export default async function MoviePage({ params }) {
  const { id } = await params
  const movie = await getMovie(id)
  
  return <MovieDetails movie={movie} />
}`}
              </pre>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-blue-700">
                SSR Implementation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-xs bg-muted p-4 rounded overflow-x-auto">
                {`// Fetch data on every request
async function getRealTimeData(movieId: number) {
  // Fresh data on each request
  return {
    currentViewers: Math.floor(Math.random() * 1000),
    lastUpdated: new Date().toLocaleTimeString(),
    trending: Math.random() > 0.5
  }
}

export default async function SSRMoviePage({ params }) {
  const { id } = await params
  const movie = await getMovie(id)
  const realTimeData = await getRealTimeData(movie.id)
  
  return <MovieDetails movie={movie} realTime={realTimeData} />
}`}
              </pre>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
