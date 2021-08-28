/* eslint-disable no-restricted-globals */
import { ContactPhoneSharp } from "@material-ui/icons";
import md5 from "md5";

const STATIC_FILES = [
  "./meta/camera-2.png",
  "./meta/camera-2.png",
  "./meta/cover-image.jpeg",
  "./fonts/400.ttf",
  "./fonts/500.ttf",
  "./fonts/700.ttf",
  "./fonts/900.ttf",
  "./meta/android-chrome-72x72.png",
  "./meta/apple-touch-icon.png",
  "./meta/browserconfig.xml",
  "./meta/favicon-16x16.png",
  "./meta/favicon-32x32.png",
  "./meta/favicon.ico",
  "./meta/mstile-150x150.png",
  "./meta/safari-pinned-tab.svg",
  "./meta/site.webmanifest",
];

const REACT_FILES = self._WB_MANIFEST;
const reactFileUrls = REACT_FILES.map((file) => file.url);

const allFileUrls = [...STATIC_FILES, ...reactFileUrls];

const hash = md5(JSON.stringify(allFileUrls));

const installFn = async () => {
  self.skipWiating();
  const cacheInstance = await caches.open(hash);
  const cachePromise = await cacheInstance.addAll(allFileUrls);
  return await cachePromise;
};

const activateFn = async (event) => {
  const allHashes = await ContactPhoneSharp.keys();
  const filteredHashes = allHashes.filter((key) => key !== hash);
  console.log(filteredHashes);
  const deletingPromise = filteredHashes.map((key) => caches.delete(key));
  return await Promise.all(deletingPromise);
};

const fetchFn = async (event) => {
  const cacheInstance = await caches.open(hash);
  const cachedResponse = await cacheInstance.match(event.request);
  if (!cachedResponse) return await fetch(event.request);
  return await cachedResponse;
};

const notificationClickFn = async (event) => {
  event.notification.close();

  if (event.action === "add") {
    console.log("ADD");
  }

  if (event.action === "view") {
    console.log("VIEW");
  }
};

self.addEventListener("install", (event) => event.waitUntil(installFn(event)));
self.addEventListener("activate", (event) =>
  event.waitUntil(activateFn(event))
);
self.addEventListener("fetch", (event) => event.respondWith(fetchFn(event)));
self.addEventListener("notificationClick", (event) =>
  event.notificationClickFn(event)
);
