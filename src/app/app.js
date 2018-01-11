import angular from 'angular';
import {react2angular} from 'react2angular';
import Component1 from './components/component1';

import '../style/app.css';

let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    };
};

class AppCtrl {
    constructor() {
        this.url = 'https://github.com/preboot/angular-webpack';
    }
}

const MODULE_NAME = 'app';

angular
    .module(MODULE_NAME, [])
    .directive('app', app)
    .controller('AppCtrl', AppCtrl)
    .component('component1',react2angular(Component1));

export default MODULE_NAME;
