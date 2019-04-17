import { stringToBase64 } from '.';

export const readFile = (file: File, callback) => {
  let fr = new FileReader();
  fr.onloadend = e => {
    const data = stringToBase64(fr.result.toString());
    callback(data);
  };
  fr.readAsDataURL(file);
};
