import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

export async function setLocal(key, value) {
  await Storage.set({
      key: key,
      value: JSON.stringify(value)
  });
}
export async function getLocal(key) {
  const item = await Storage.get({ key: key })
  return item.value ? JSON.parse(item.value) : null
}
export async function removeLocal(key) {
  await Storage.remove({
      key: key
  });
}