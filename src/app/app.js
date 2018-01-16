import angular from 'angular';
import {react2angular} from 'react2angular';
import Mother from './components/mother';

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
    .component('mother', react2angular(Mother, [], ['$http']));

export default ['$http', MODULE_NAME];
