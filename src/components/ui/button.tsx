"use client"

import * as React from "react"
import { cn } from "@/lib/cn"

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<"button"> & {
  variant?: "default" | "ghost" | "outline"
  size?: "default" | "sm" | "icon-sm"
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "ghost" && "hover:bg-card",
        variant === "outline" && "border border-border hover:bg-card",
        size === "default" && "h-10 px-4 py-2",
        size === "sm" && "h-9 px-3",
        size === "icon-sm" && "h-8 w-8",
        className
      )}
      {...props}
    />
  )
}

export { Button }
