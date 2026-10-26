(function () {
  if (!window.$scramjetLoadController) {
    window.$scramjetLoadController = function () {
      class ScramjetController {
        constructor(config = {}) {
          this.config = config;
          this.prefix = config.prefix || './ixlmath/go/';
        }

        init() {
          return true;
        }

        encodeUrl(url) {
          try {
            return `${this.prefix}${btoa(unescape(encodeURIComponent(url)))}`;
          } catch (error) {
            return `${this.prefix}${btoa(url)}`;
          }
        }

        decodeUrl(value) {
          try {
            return decodeURIComponent(escape(atob(value)));
          } catch (error) {
            return atob(value);
          }
        }
      }

      return { ScramjetController };
    };
  }
})();
