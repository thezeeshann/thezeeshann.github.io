import { useCallback, useEffect, useRef, useState } from "react";

const API_SRC = "https://www.youtube.com/iframe_api";

// Loads the IFrame API exactly once and resolves when YT.Player is available.
let apiPromise = null;

const loadApi = () => {
  if (apiPromise) return apiPromise;

  apiPromise = new Promise((resolve, reject) => {
    if (window.YT && window.YT.Player) {
      resolve(window.YT);
      return;
    }

    // Chain rather than clobber: something else may already be waiting.
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof previous === "function") previous();
      resolve(window.YT);
    };

    if (!document.querySelector(`script[src="${API_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = API_SRC;
      script.async = true;
      script.onerror = () => reject(new Error("YouTube IFrame API blocked"));
      document.head.appendChild(script);
    }
  });

  return apiPromise;
};

/**
 * Drives a single YouTube video as looping background audio.
 * The caller renders a div and passes its ref back in as `containerRef`.
 */
export const useYouTubeAudio = (videoId) => {
  const containerRef = useRef(null);
  const playerRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    loadApi()
      .then((YT) => {
        if (cancelled || !containerRef.current) return;

        playerRef.current = new YT.Player(containerRef.current, {
          videoId,
          playerVars: {
            // `playlist` set to the same id is what makes a single video loop;
            // `loop: 1` alone does nothing.
            loop: 1,
            playlist: videoId,
            controls: 0,
            disablekb: 1,
            playsinline: 1,
          },
          events: {
            onReady: () => {
              if (!cancelled) setReady(true);
            },
            onStateChange: (event) => {
              if (cancelled) return;
              // Track the player's actual state so the button can't desync.
              setPlaying(event.data === YT.PlayerState.PLAYING);
            },
            onError: () => {
              if (!cancelled) setError(true);
            },
          },
        });
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
      const player = playerRef.current;
      playerRef.current = null;
      if (player && typeof player.destroy === "function") player.destroy();
    };
  }, [videoId]);

  const toggle = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;

    try {
      if (playing) {
        player.pauseVideo();
      } else {
        player.unMute();
        player.playVideo();
      }
    } catch {
      setError(true);
    }
  }, [playing]);

  return { containerRef, ready, playing, error, toggle };
};
