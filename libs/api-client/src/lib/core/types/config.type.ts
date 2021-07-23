export type Config = {
  sandbox?: boolean;
  devProxyPort?: number;
  storageMode?: 'LOCAL_STORAGE' | 'MEMORY'; // 'localstorage';
};

// TODO: move to some other file
export const DEFAULT_CONFIG: Config = {
  sandbox: false,
  storageMode: 'LOCAL_STORAGE',
};
