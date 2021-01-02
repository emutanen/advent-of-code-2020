export interface CustomsFormData {
  entries: string[][];
}

export const dataMapMethod = (customsFormData: string): CustomsFormData => {
  return { entries: customsFormData
  .split(' ')
  .map(line => line.split(''))
  }
}
