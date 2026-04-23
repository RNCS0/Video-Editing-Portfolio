"use client"

import { useState, useRef } from "react"
import { Play, Pause } from "lucide-react"

interface VideoCardProps {
  title: string
  category: string
  thumbnail: string
  videoSrc?: string
  aspectRatio?: "portrait" | "landscape"
}

export function VideoCard({ title, category, thumbnail, videoSrc, aspectRatio = "landscape" }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayToggle = () => {
    if (!videoSrc || !videoRef.current) return
    
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-lg cursor-pointer ${
        aspectRatio === "portrait" ? "aspect-[9/16]" : "aspect-video"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        if (videoRef.current && isPlaying) {
          videoRef.current.pause()
          setIsPlaying(false)
        }
      }}
      onClick={handlePlayToggle}
    >
      {videoSrc ? (
        <video
          ref={videoRef}
          src={videoSrc}
          poster={thumbnail}
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      ) : (
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      
      {/* Overlay */}
      <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
        isHovered && !isPlaying ? "opacity-100" : "opacity-0"
      }`} />
      
      {/* Play/Pause button */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
        isHovered && !isPlaying ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}>
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-black">
          {isPlaying ? (
            <Pause className="h-6 w-6 fill-current" />
          ) : (
            <Play className="h-6 w-6 fill-current ml-1" />
          )}
        </div>
      </div>
      
      {/* Info */}
      <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
        isHovered && !isPlaying ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}>
        <p className="text-xs font-medium uppercase tracking-wider text-white/70">{category}</p>
        <h3 className="mt-1 text-lg font-semibold text-white">{title}</h3>
      </div>
    </div>
  )
}
