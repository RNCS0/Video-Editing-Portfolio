import { YouTubeEmbed } from "./youtube-embed"
import { YouTubeShortsEmbed } from "./youtube-shorts-embed"

const shortFormVideos = [
  {
    title: "Talking Head 1",
    category: "Talking Head",
    youtubeId: "8SixPnE0seo",
  },
  {
    title: "Talking Head 2",
    category: "Talking Head",
    youtubeId: "_Ron5WEIkGU",
  },
  {
    title: "B-Rolls",
    category: "Lifestyle",
    youtubeId: "k3cn5vg1-Tg",
  },
  {
    title: "Music Trailer",
    category: "Lifestyle",
    youtubeId: "OXA5cxcfxUA",
  },
  {
    title: "Typography",
    category: "Typography",
    youtubeId: "zxWYRP9F4us",
  },
  {
    title: "Real Estate",
    category: "Real Estate",
    youtubeId: "FbutHRqyt9c",
  },
  {
    title: "Ad Video 1",
    category: "Advertisement",
    youtubeId: "KJ3HFIaKTDM",
  },
  {
    title: "Ad Video 2",
    category: "Advertisement",
    youtubeId: "UiZPed06KRg",
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
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 md:gap-6">
            {shortFormVideos.map((video) => (
              <YouTubeShortsEmbed
                key={video.youtubeId}
                videoId={video.youtubeId}
                title={video.title}
                category={video.category}
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
