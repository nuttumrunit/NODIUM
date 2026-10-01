const configured = String(import.meta.env.VITE_WALLEMO_API_ORIGIN || '').replace(/\/$/, '')

export function apiUrl(path) {
  return `${configured}${path}`
}

export const apiOrigin = configured
