import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home'
    },
    {
      title: 'Action Sheet',
      url: '/action-sheet'
    },
    {
      title: 'Alert',
      url: '/alert'
    },
    {
      title: 'Badge',
      url: '/badge'
    },
    {
      title: 'Button',
      url: '/button'
    },
    {
      title: 'Card',
      url: '/card'
    },
    {
      title: 'Checkbox',
      url: '/checkbox'
    },
    {
      title: 'Chip',
      url: '/chip'
    },
    {
      title: 'Content',
      url: '/content'
    },
    {
      title: 'Date & Time pickers',
      url: '/date-time'
    },
    {
      title: 'Floating Action Button',
      url: '/floating-action-button'
    },
    {
      title: 'Grid',
      url: '/grid'
    },
    {
      title: 'Infinite Scroll',
      url: '/infinite-scroll'
    },
    {
      title: 'Input',
      url: '/input'
    },
    {
      title: 'Item',
      url: '/item'
    },
    {
      title: 'List',
      url: '/list'
    },
    {
      title: 'Media',
      url: '/media'
    },
    {
      title: 'Modal',
      url: '/modal'
    },
    {
      title: 'Navigation',
      url: '/navigation'
    },
    {
      title: 'Popover',
      url: '/popover'
    },
    {
      title: 'Progress indicators',
      url: '/progress-indicators'
    },
    {
      title: 'Radio',
      url: '/radio'
    },
    {
      title: 'Range',
      url: '/range'
    },
    {
      title: 'Refresher',
      url: '/refresher'
    },
    {
      title: 'Reorder',
      url: '/reorder',
    },
    {
      title: 'Searchbar',
      url: '/searchbar'
    },
    {
      title: 'Segment',
      url: '/segment'
    },
    {
      title: 'Select',
      url: '/select'
    },
    {
      title: 'Slides',
      url: '/slides'
    },
    {
      title: 'Tabs',
      url: '/tabs'
    },
    {
      title: 'Toast',
      url: '/toast'
    },
    {
      title: 'Toggle',
      url: '/toggle'
    },
    {
      title: 'Typography',
      url: '/typography'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#006064');
      this.splashScreen.hide();
    });
  }
}
