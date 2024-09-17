declare module 'three/examples/jsm/loaders/GLTFLoader' {
    export class GLTFLoader {
      load(
        url: string,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onLoad: (gltf: any) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void
      ): void;
    }
  }
  