function toBase64(file: File): Promise<string> {
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  return new Promise<string>((resolve, reject) => {
    reader.onload = () => {
      let result: string | ArrayBuffer = reader.result;
      if (result instanceof ArrayBuffer) {
        result = String.fromCharCode.apply(null, new Uint8Array(result));
      }
      resolve(btoa(result as string));
    };
    reader.onerror = err => reject(err);
  });
}

export async function fileUploadToBase64(fileUploadEvent): Promise<string> {
  const files = fileUploadEvent.srcElement.files as FileList;
  return await toBase64(files[0]);
}
