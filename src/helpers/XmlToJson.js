export default function XmlToJson(xml) {
  var obj = {};
  if (xml.nodeType === 2 || xml.nodeType === 3 || xml.nodeType === 4) {
    obj = xml.nodeValue;
  }
  if (xml.hasChildNodes()) {
    for (var i = 0; i < xml.childNodes.length; i++) {
      var item = xml.childNodes.item(i);
      var nodeName = item.nodeName;
      if (typeof obj[nodeName] === "undefined") {
        obj[nodeName] = XmlToJson(item);
      } else {
        if (typeof obj[nodeName].push === "undefined") {
          var old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(XmlToJson(item));
      }
    }
  }
  return obj;
}
