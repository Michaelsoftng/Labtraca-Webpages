import { useEffect } from "react";

const Download = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent;

    const androidUrl =
      "https://play.google.com/store/apps/details?id=com.itvisual.labtraca";
    const iosUrl =
      "https://apps.apple.com/app/labtraca/id6754526444";

    if (/android/i.test(userAgent)) {
      window.location.href = androidUrl;
      return;
    }

    if (/iphone|ipad|ipod/i.test(userAgent)) {
      window.location.href = iosUrl;
      return;
    }
  }, []);

  return <h1>Desktop user</h1>;
};

export default Download;
