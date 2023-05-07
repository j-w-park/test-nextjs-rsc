declare namespace NodeJS {
  interface ProcessEnv {
    readonly DB: string;
    readonly DB_HOST: string;
    readonly DB_PORT: number;
  }
}
