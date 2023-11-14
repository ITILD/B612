/**
 * js动态库  todo 单例
 * eg:const OPENCV_URL = "https://docs.opencv.org/3.4.5/opencv.js";
      await loadJsLib(OPENCV_URL);
 * @param {string} url
 * @returns
 */
const loadJsDll = (url: string) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.setAttribute("async", "");
    script.setAttribute("type", "text/javascript");
    script.onload = () => {
      console.log("Loaded " + url);
      resolve(true);
    };
    script.addEventListener("error", () => {
      console.log("Failed to load " + url);
    });
    script.src = url;
    const node = document.getElementsByTagName("script")[0] as HTMLScriptElement;
    if (node.parentNode) node.parentNode.insertBefore(script, node);
  });
};


export { loadJsDll }
