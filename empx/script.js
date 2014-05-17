function EmTable($scope) {
    var pFloat = function(x){ 
        return parseFloat((x).toPrecision(2));
    }
  
   precision = 0.2;
   $scope.from = 14;
   $scope.to = 22;
   $scope.values = function() {
    var value = [];
    for(base=$scope.from;base<=$scope.to;base++){
        set = {};
        set.base = base;
        set.values = [];
        em = 0;
        while(em<5){
            em=pFloat(em+precision);
            px = pFloat(base*em);
            v = [em,px];
            set.values.push(v);
        }
        value.push(set);
    }
    console.log("Hello");
    $scope.tables = value; 
  };
}
