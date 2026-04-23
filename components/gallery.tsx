import { VideoCard } from "./video-card"
import { YouTubeEmbed } from "./youtube-embed"

const shortFormVideos = [
  {
    title: "Brand Reveal",
    category: "Social Media",
    // To add your own videos, place them in /public/videos/ folder
    // and reference them as "/videos/your-video.mp4"
    videoSrc: "",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=711&fit=crop",
  },
  {
    title: "Product Launch",
    category: "Commercial",
    videoSrc: "",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=711&fit=crop",
  },
  {
    title: "Behind the Scenes",
    category: "Lifestyle",
    videoSrc: "",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=711&fit=crop",
  },
  {
    title: "Street Style",
    category: "Fashion",
    videoSrc: "",
    thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=711&fit=crop",
  },
]

const longFormVideos = [
  {
    title: "Why Political Stories Go Viral",
    category: "Documentary",
    youtubeId: "XoGxsQjHYk4",
  },
  {
    title: "Every Pokemon Region Explained in 4 Minutes",
    category: "Explainer",
    youtubeId: "QLX6tiNZKgU",
  },
]

export function Gallery() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Short Form Section */}
        <div className="mb-24">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Short Form</h2>
              <p className="mt-2 text-muted-foreground">Vertical content for social platforms</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6">
            {shortFormVideos.map((video) => (
              <VideoCard
                key={video.title}
                title={video.title}
                category={video.category}
                thumbnail={video.thumbnail}
                videoSrc={video.videoSrc}
                aspectRatio="portrait"
              />
            ))}
          </div>
        </div>

        {/* Long Form Section */}
        <div>
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Long Form</h2>
              <p className="mt-2 text-muted-foreground">Cinematic content & documentaries</p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {longFormVideos.map((video) => (
              <YouTubeEmbed
                key={video.youtubeId}
                videoId={video.youtubeId}
                title={video.title}
                category={video.category}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
