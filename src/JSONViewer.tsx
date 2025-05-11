// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function JSONViewer(data: any) {
  try {
    return JSON.stringify(data);
  } catch (error) {
    return `Error stringifying JSON: ${(error as Error).message}`;
  }
}
