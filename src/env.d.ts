interface ImportMetaEnv {
  readonly VITE_NYTIMES_API_KEY?: string;
  readonly VITE_BASE_URL?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}