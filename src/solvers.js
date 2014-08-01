/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = new Board({n:n});

  var rows = solution.rows();
  //iterate through each row
  for(var i=0; i<n; i++){
    //try all possible solutions for each index of this row.
    for(var j=0; j<n; j++){
      rows[i][j] = 1;
      if(solution.hasColConflictAt(j) || solution.hasRowConflictAt(i)){
          rows[i][j] = 0;
      }
      else{
        break;
      }

    }

  }

  return rows;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});

  var rows = board.rows();

  var findSolution = function(row){
    if(row === n){
      solutionCount++;
      return;
    }

    for(var i=0; i<n; i++){
      //place rook on the slot
      board.togglePiece(row, i);

      if(!board.hasAnyRooksConflicts()){
        findSolution(row+1);
      }

      board.togglePiece(row, i);
    }
  }

  findSolution(0);

  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n:n});

  var rows = solution.rows();
  //iterate through each row
  for(var i=0; i<n; i++){
    //try all possible solutions for each index of this row.
    for(var j=0; j<n; j++){
      rows[i][j] = 1;
      if(solution.hasAnyQueensConflicts()){
          rows[i][j] = 0;
      }
      else{
        break;
      }

    }

  }

  return rows;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n:n});
  var rows = board.rows();

  var findSolution = function(row){
    if(row === n){
      solutionCount++;
      return;
    }
    for(var i=0; i<n; i++){

      //place queen on the slot
      board.togglePiece(row, i);

      if(!board.hasAnyQueensConflicts()){
        findSolution(row+1);
      }

      board.togglePiece(row, i);
    }
  };

  findSolution(0);

  return solutionCount;
};
