import css from './style.less';
import Marionette from 'marionette';
import tpl from './template.nunj';
import Navbar from 'views/Navbar';

export default Marionette.LayoutView.extend({

    el: 'body',

    template: tpl,

    regions: {
        header: '[data-region="root-header"]',
        content: '[data-region="root-content"]',
        footer: '[data-region="root-footer"]'
    },

    initialize () {
        this.$el.attr('data-layout', 'Root');

    },

    onRender () {
        console.log('rendered');
        this.header.show(new Navbar());
    }

});
