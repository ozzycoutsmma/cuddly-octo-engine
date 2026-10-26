(function () {
  const root = window;
  root.BareMux = root.BareMux || {};

  class BareMuxConnection {
    constructor(url) {
      this.url = url;
      this.transport = null;
    }

    setTransport(path, options) {
      this.transport = { path, options };
      return true;
    }

    getTransport() {
      return this.transport;
    }
  }

  root.BareMux.BareMuxConnection = BareMuxConnection;
})();
