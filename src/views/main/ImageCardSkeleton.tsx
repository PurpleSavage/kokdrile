export default function ImageCardSkeleton() {
  return (
    <div className="group bg-white/5 rounded-xl overflow-hidden border border-white/10 animate-pulse">
      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden" />

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="h-4 bg-white/10 rounded w-3/5" />
          <div className="h-4 bg-white/10 rounded w-1/5" />
        </div>
        <div className="h-3 bg-white/10 rounded w-2/5" />
      </div>
    </div>
  );
}
