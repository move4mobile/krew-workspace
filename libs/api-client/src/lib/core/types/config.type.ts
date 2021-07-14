export type Config = {
  sandbox?: boolean;
  storageMode?: 'LOCALSTORAGE' | 'MEMORY'; // 'localstorage';
};

// TODO: move to some other file
export const DEFAULT_CONFIG: Config = {
  sandbox: false,
  storageMode: 'MEMORY',
};
