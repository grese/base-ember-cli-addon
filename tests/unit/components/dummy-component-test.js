/* jshint expr:true */
import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';

describeComponent('dummy-component', 'DummyComponentComponent', {}, function() {
    it('should render a div.', function() {
        // creates the component instance
        var component = this.subject();
        expect(component._state).to.equal('preRender');

        // renders the component on the page
        this.render();
        var $component = component.$();
        expect(component._state).to.equal('inDOM');
        expect($component.prop('tagName')).to.eq('DIV');
    });
});
