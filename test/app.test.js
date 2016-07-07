describe('AppController', function () {
  var $scope, searchController, filterService, $q, peopleinfo;
  beforeEach(module('searchApp'));
  beforeEach(function () {
    inject(function ($controller, _filterService_, $rootScope, _$q_) {
      filterService = _filterService_;

      $scope = $rootScope.$new();
      searchController = $controller('SearchCtrl', {
        $scope: $scope
      });
      
      var expectedResponse = [{
        "id": "1",
        "firstName": "Sean",
        "lastName": "Kerr",
        "picture": "img/sean.png",
        "Title": "Senior Developer"
      }, {
          "id": "2",
          "firstName": "Yaw",
          "lastName": "Ly",
          "picture": "img/yaw.png",
          "Title": "AEM Magician"
        }];

      sinon.stub(filterService, 'getData', function(){
        return expectedResponse;
      });

      peopleinfo = filterService.getData();
    });
  });
  describe('People', function () {
    this.timeout(1000);
    it('should retrieve people from data store and provide them to view', function () {
      expect(peopleinfo.length).to.equal(2);
    });
    it('should retrieve people object check first name matching with Sean', function () {
      expect(peopleinfo[0].firstName).to.equal("Sean");
    });
    it('should retrieve people object check keys', function () {
      expect(Object.keys(peopleinfo[0]).length).to.equal(5);
    });
  });
});
