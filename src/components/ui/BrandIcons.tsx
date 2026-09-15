export function GithubIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.2.09 1.84 1.24 1.84 1.24 1.08 1.85 2.83 1.31 3.52 1 .11-.79.42-1.31.77-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 7.02a1.96 1.96 0 1 0 0-3.92 1.96 1.96 0 0 0 0 3.92ZM20.5 20.5h-3.37v-5.83c0-1.39-.03-3.18-1.94-3.18-1.94 0-2.24 1.51-2.24 3.08v5.93H9.58V8.5h3.24v1.64h.05c.45-.85 1.55-1.75 3.19-1.75 3.42 0 4.44 2.25 4.44 5.17V20.5Z" />
    </svg>
  );
}
