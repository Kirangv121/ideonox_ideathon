"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const CustomProgress = React.forwardRef(({ className, value = 0, max = 100, color = "blue", ...props }, ref) => {
  const percentage = Math.min(Math.max(value, 0), max) / max

  // Define gradient colors based on the color prop
  let gradientColors = "from-blue-500 to-cyan-500"
  if (color === "green") gradientColors = "from-green-500 to-emerald-500"
  if (color === "yellow") gradientColors = "from-yellow-500 to-amber-500"
  if (color === "purple") gradientColors = "from-purple-500 to-pink-500"
  if (color === "orange") gradientColors = "from-orange-500 to-red-500"

  return (
    <div ref={ref} className={cn("relative h-4 w-full overflow-hidden rounded-full bg-gray-800", className)} {...props}>
      <div
        className={`h-full w-full flex items-center rounded-full bg-gradient-to-r ${gradientColors} transition-all duration-500 ease-out`}
        style={{
          transform: `translateX(-${100 - percentage * 100}%)`,
        }}
      >
        {/* Optional: Add a shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
      </div>
    </div>
  )
})

CustomProgress.displayName = "CustomProgress"

export { CustomProgress }
