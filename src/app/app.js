import angular from 'angular';
import {react2angular} from 'react2angular';
import InputBox from './components/inputBox';

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
    .component('inputBox',react2angular(InputBox));

export default MODULE_NAME;
