export default async function (ctx, inject) {
  const icons = {"64x64":"/assets/icons/icon_64.7144fb.png","120x120":"/assets/icons/icon_120.7144fb.png","144x144":"/assets/icons/icon_144.7144fb.png","152x152":"/assets/icons/icon_152.7144fb.png","192x192":"/assets/icons/icon_192.7144fb.png","384x384":"/assets/icons/icon_384.7144fb.png","512x512":"/assets/icons/icon_512.7144fb.png"}
  const getIcon = size => icons[size + 'x' + size] || ''
  inject('icon', getIcon)
}
