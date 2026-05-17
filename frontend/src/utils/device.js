export const getDeviceType = () => {

  const width = window.innerWidth;

  const userAgent = navigator.userAgent.toLowerCase();

  const isMobileUserAgent =
    /iphone|android.+mobile|blackberry|iemobile|opera mini/i.test(
      userAgent
    );

  const isTabletUserAgent =
    /ipad|android(?!.*mobile)|tablet|kindle|playbook|silk/i.test(
      userAgent
    );

  // Real mobile devices
  if (isMobileUserAgent) {
    return "mobile";
  }

  // Real tablets
  if (isTabletUserAgent) {
    return "tablet";
  }

  // Responsive fallback for devtools testing
  if (width < 768) {
    return "mobile";
  }

  if (width >= 768 && width <= 1024) {
    return "tablet";
  }

  return "desktop";
};