import { readFile } from '.';

export const fileSelectedHandler: any = (
  fieldName: string,
  value: File,
  group: string,
  fileName: string,
  state: any,
  callback
) => {
  var newArray: Array<any> = [...state[fieldName]];
  const fileExtension = 'image/' + fileName.substring(fileName.lastIndexOf('.') + 1);

  readFile(value, data => {
    let newElement = { img: { data: data, contentType: fileExtension } };
    newArray.push(newElement);
    var newState = {
      ...state,
      [fieldName]: newArray,
    };
    callback(newState);
  });
};
export const handleChange = (fieldName: string, value: any, group: string, state: any) => {
  const newState = {
    ...state,
    [group]: {
      ...state[group],
      [fieldName]: value,
    },
  };
  return newState;
};
