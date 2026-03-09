export function OrganicCurve({ className = "", fill = "fill-black" }: { className?: string; fill?: string }) {
  return (
    <div className={`absolute bottom-0 left-0 w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block h-[60px] w-[calc(100%+1.3px)] md:h-[100px]"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className={fill}
        ></path>
      </svg>
    </div>
  )
}

export function MosaicBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light" />
      <div className="absolute inset-0 mosaic-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
      <div
        className="absolute top-[10%] left-[10%] h-64 w-64 rounded-full bg-blue-500/10 blur-3xl animate-float-slow"
      />
      <div
        className="absolute bottom-[20%] right-[10%] h-96 w-96 rounded-full bg-blue-400/10 blur-3xl animate-float-slow-reverse"
      />
    </div>
  )
}

export function OrganicBlob() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 -z-10 scale-125 opacity-50"
    >
      <path
        fill="currentColor"
        d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,71.6,32.5C61,43.5,51.1,52.6,40.3,59.8C29.5,67,17.8,72.3,5.3,73.5C-7.2,74.7,-20.2,71.8,-32.3,65.4C-44.4,59,-55.6,49.1,-64.6,37.5C-73.6,25.9,-80.4,12.6,-81.3,-1.2C-82.2,-15,-77.2,-29.3,-68.1,-40.8C-59,-52.3,-45.8,-61.1,-32.5,-68.8C-19.2,-76.5,-5.8,-83.1,7.1,-82.8C20,-82.5,40,-75.3,44.7,-76.4Z"
        transform="translate(100 100)"
        className="text-blue-600/20"
      />
    </svg>
  )
}
