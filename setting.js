settings = {
    theme: "dark",
    notification: true,
    phone: "google pixel",
    laptop: "dell"
}

Object.freeze(settings)
settings.theme = "light"
console.log(settings);
console.log(Object.isFrozen(settings));

