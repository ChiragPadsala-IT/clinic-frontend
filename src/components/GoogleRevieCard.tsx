import React, { useState } from "react";
import { GoogleLogo } from "../assets/images";

interface ReviewProps {
  authorName: string;
  authorAvatar?: string | null; // url or null
  text: string;
  rating: number; // 0 - 5
  date: string; // ISO string or formatted date
  verified?: boolean;
  source?: "google" | string; // optional source label
}

/**
 * GoogleReviewCard
 */
const GoogleReviewCard: React.FC<ReviewProps> = ({
  authorName,
  authorAvatar,
  text,
  rating,
  date,
  verified = false,
  source = "google",
}) => {
  const [expanded, setExpanded] = useState(false);

  // how many chars to show when collapsed
  const PREVIEW_CHARS = 200;
  const isLong = text.length > PREVIEW_CHARS;
  const previewText = isLong
    ? text.slice(0, PREVIEW_CHARS).trimEnd() + "…"
    : text;

  function renderStars(r: number) {
    const full = Math.floor(r);
    const half = r - full >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);
    return (
      <div className="flex items-center gap-1 text-yellow-400" aria-hidden>
        {Array.from({ length: full }).map((_, i) => (
          <svg
            key={`f${i}`}
            className="w-4 h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.454a1 1 0 00-.363 1.118l1.286 3.966c.3.92-.755 1.688-1.54 1.118l-3.376-2.454a1 1 0 00-1.176 0l-3.376 2.454c-.785.57-1.84-.198-1.54-1.118l1.286-3.966a1 1 0 00-.363-1.118L2.06 9.393c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.05 2.927z" />
          </svg>
        ))}
        {half && (
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <defs>
              <linearGradient id="halfGrad">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#e5e7eb" />
              </linearGradient>
            </defs>
            <path
              fill="url(#halfGrad)"
              d="M12 .587l3.668 7.431L24 9.748l-6 5.847 1.417 8.266L12 19.771 4.583 23.861 6 15.595 0 9.748l8.332-1.73z"
            />
          </svg>
        )}
        {Array.from({ length: empty }).map((_, i) => (
          <svg
            key={`e${i}`}
            className="w-4 h-4 text-gray-300"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.376 2.454a1 1 0 00-.363 1.118l1.286 3.966c.3.92-.755 1.688-1.54 1.118l-3.376-2.454a1 1 0 00-1.176 0l-3.376 2.454c-.785.57-1.84-.198-1.54-1.118l1.286-3.966a1 1 0 00-.363-1.118L2.06 9.393c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69L9.05 2.927z" />
          </svg>
        ))}
      </div>
    );
  }

  return (
    <article className="bg-white rounded-2xl shadow-md p-5 max-w-xl hover:shadow-lg transition-all duration-200">
      <header className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
          {authorAvatar ? (
            <img
              src={authorAvatar}
              alt={`${authorName} avatar`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              A
            </div>
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-semibold text-gray-900">
              {authorName}
            </h4>

            {verified && (
              <span className="inline-flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Verified
              </span>
            )}

            {/* source (Google icon) */}
            {source === "google" && (
              <span className="ml-auto flex items-center gap-2 text-xs text-gray-500">
                <img className="h-10 w-10" src={GoogleLogo} />
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 mt-1">
            {renderStars(rating)}
            <time className="text-xs text-gray-500">
              {new Date(date).toLocaleDateString()}
            </time>
          </div>
        </div>
      </header>

      <div className="mt-4 text-gray-700 text-sm leading-relaxed">
        <p>{expanded ? text : previewText}</p>

        {isLong && (
          <button
            onClick={() => setExpanded((s) => !s)}
            className="mt-3 inline-block text-sm text-primary font-medium hover:underline"
            aria-expanded={expanded}
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>
    </article>
  );
};

export default GoogleReviewCard;
