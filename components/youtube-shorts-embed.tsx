interface YouTubeShortsEmbedProps {
  videoId: string
  title: string
  category: string
}

export function YouTubeShortsEmbed({ videoId, title, category }: YouTubeShortsEmbedProps) {
  return (
    <div className="group overflow-hidden rounded-lg border border-border bg-card">
      <div className="relative aspect-[9/16] w-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {category}
        </span>
        <h3 className="mt-1 text-lg font-semibold text-balance">{title}</h3>
      </div>
    </div>
  )
}
