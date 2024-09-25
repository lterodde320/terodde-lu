import { Badge } from "@/components/ui/badge"

export default function BadgeCollection({badges}: {badges: {name: string, color: string}[]}) {
    return (
      <div className="p-5 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md">
        <div className="flex flex-wrap gap-2 justify-center">
          {badges.map((badge) => (
            <Badge
              key={badge.name}
              variant="secondary"
              className="flex items-center gap-1 px-3 py-1 text-sm font-medium bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              <span>{badge.name}</span>
            </Badge>
          ))}
        </div>
      </div>
    )
  }