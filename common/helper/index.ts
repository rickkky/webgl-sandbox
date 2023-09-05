export * from './resize';
export * from './webgl';
export * from './webgpu';

export function loadImage(imageSource: string): Promise<HTMLImageElement> {
  const image = new Image();
  image.src = imageSource;
  return new Promise<HTMLImageElement>((resolve, reject) => {
    image.onload = () => resolve(image);
    image.onerror = () => reject();
  });
}

export function createDefer<T>() {
  let resolve: (value: T) => void;
  let reject: (reason?: any) => void;
  const promise = new Promise<T>((s, j) => {
    resolve = s;
    reject = j;
  });
  return {
    promise,
    resolve: resolve!,
    reject: reject!,
  };
}
