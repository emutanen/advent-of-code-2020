export interface HandheldCommand {
  command: string;
  value: number;
}

export const dataMapMethod = (handheldDataLine: string): HandheldCommand => {
  const cmdArr = handheldDataLine.split(' ');
  return { command: cmdArr[0], value: parseInt(cmdArr[1]) }
}