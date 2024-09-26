interface ImportMetaEnv {
    readonly VITE_APP_PORT: string
    readonly VITE_APP_ENV: string
    readonly VITE_APP_NAME: string
    readonly VITE_PARKING_SYSTEM_URL: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }