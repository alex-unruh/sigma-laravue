const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"dashboard":{"uri":"\/","methods":["GET","HEAD"]},"ui-formlayout":{"uri":"formlayout","methods":["GET","HEAD"]},"ui-input":{"uri":"input","methods":["GET","HEAD"]},"ui-floatlabel":{"uri":"floatlabel","methods":["GET","HEAD"]},"ui-invalidstate":{"uri":"invalidstate","methods":["GET","HEAD"]},"empty":{"uri":"empty","methods":["GET","HEAD"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
