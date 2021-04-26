import { Plugins, CameraResultType, CameraSource} from "@capacitor/core";

export function usePhotoGallery() {
  const { Camera, Filesystem, FilesystemDirectory } = Plugins;

  const takePhotoFile = async () => {
    const cameraPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    const fileName = new Date().getTime() + '.jpeg';
    const savedFileImage = await savePicture(cameraPhoto, fileName);

    console.log(savedFileImage )
  };

  const convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

  const savePicture = async (photo, fileName) => {
    let base64Data;
  
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath);
    const blob = await response.blob();
    base64Data = await convertBlobToBase64(blob);
  
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: FilesystemDirectory.Data
    });
    savedFile;
  
    // Use webPath to display the new image instead of base64 since it's 
    // already loaded into memory
    return {
      filepath: fileName,
      webviewPath: photo.webPath
    };
  }

  return {
    takePhotoFile
  };
}