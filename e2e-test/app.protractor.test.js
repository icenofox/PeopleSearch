describe('AppController', function () {
    var expect = require('chai').expect;

    beforeEach(function (done) {
        browser.get('http://localhost:8000').then(done);
    });

    it('should filter people by firstName', function () {

        var searchBox = element(by.model('vm.searchCriteria'));
        searchBox.clear();
        searchBox.sendKeys('e');

        var expectedNames = ['Sean', 'Eric', 'Hayley'];
        var i = 0;
        var value = element
            .all(by.css('.name'))
            .each(function (elem, i) {
                return elem.getText().then(function (text) {
                    expect(text).to.equal(expectedNames[i]);
                });
            });
    });

    it('should cancel filter if remove button selected', function () {

        var searchBox = element(by.model('vm.searchCriteria'));
        searchBox.clear();

        var sortButton = element(by.id('removeIcon'));
        sortButton.click();

        var expectedNames = ['Sean', 'Yaw', 'Lucy', 'Rory', 'Eric', 'Hayley'];
        var i = 0;
        var value = element
            .all(by.css('.name'))
            .each(function (elem, i) {
                return elem.getText().then(function (text) {
                    if (i < expectedNames.length) {
                        expect(text).to.equal(expectedNames[i]);
                    }
                });
            });
    });
});