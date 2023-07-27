import Service from '@ember/service';
import { App } from "@capacitor/app";
import { inject as service } from '@ember/service';

export default class DeepLinksService extends Service {
  constructor () {
    super (...arguments);

    this.configure ();
  }

  @service
  router;

  configure () {
    App.addListener ('appUrlOpen', (event) => {
      try {
        const url = new URL (event.url);
        const targetRoute = `${url.pathname}${url.search}`;

        this.router.replaceWith (targetRoute);
      }
      catch (err) {
        console.error (err);
      }
    });
  }
}
