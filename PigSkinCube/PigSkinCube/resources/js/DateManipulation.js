


$( document ).ready(function() {



  //(function(_){
    var data = { "0":[{"columnName": "2009-01", "columnNumber": "0","value": "0"},{"columnName": "2009-02", "columnNumber": "1","value": "0"},{"columnName": "2009-03", "columnNumber": "2","value": "0"},
    {"columnName": "2009-04", "columnNumber": "3","value": "0"},{"columnName": "2009-05", "columnNumber": "4","value": "0"},{"columnName": "2009-06", "columnNumber": "5","value": "0"},{"columnName": "2009-07",
    "columnNumber": "6","value": "0"},{"columnName": "2009-08", "columnNumber": "7","value": "0"},{"columnName": "2009-09", "columnNumber": "8","value": "0"},{"columnName": "2009-10", "columnNumber": "9","value": "0"},
    {"columnName": "2009-11", "columnNumber": "10","value": "0"},{"columnName": "2009-12", "columnNumber": "11","value": "0"},{"columnName": "2010-01", "columnNumber": "12","value": "0"},
    {"columnName": "2010-02", "columnNumber": "13","value": "0"},{"columnName": "2010-03", "columnNumber": "14","value": "0"},{"columnName": "2010-04", "columnNumber": "15","value": "0"},
    {"columnName": "2010-05", "columnNumber": "16","value": "0"},{"columnName": "2010-06", "columnNumber": "17","value": "0"},{"columnName": "2010-07", "columnNumber": "18","value": "0"},
    {"columnName": "2010-08", "columnNumber": "19","value": "0"},{"columnName": "2010-09", "columnNumber": "20","value": "0"},{"columnName": "2010-10", "columnNumber": "21","value": "0"},
    {"columnName": "2010-11", "columnNumber": "22","value": "0"},{"columnName": "2010-12", "columnNumber": "23","value": "0"},{"columnName": "2011-01", "columnNumber": "24","value": "0"},
    {"columnName": "2011-02", "columnNumber": "25","value": "0"},{"columnName": "2011-03", "columnNumber": "26","value": "0"},{"columnName": "2011-04", "columnNumber": "27","value": "0"},
    {"columnName": "2011-05", "columnNumber": "28","value": "0"},{"columnName": "2011-06", "columnNumber": "29","value": "0"},{"columnName": "2011-07", "columnNumber": "30","value": "0"},
    {"columnName": "2011-08", "columnNumber": "31","value": "0"},{"columnName": "2011-09", "columnNumber": "32","value": "0"},{"columnName": "2011-10", "columnNumber": "33","value": "0"},
    {"columnName": "2011-11", "columnNumber": "34","value": "0"},{"columnName": "2011-12", "columnNumber": "35","value": "0"},{"columnName": "2012-01", "columnNumber": "36","value": "0"},
    {"columnName": "2012-02", "columnNumber": "37","value": "0"},{"columnName": "2012-03", "columnNumber": "38","value": "0"},{"columnName": "2012-04", "columnNumber": "39","value": "0"},
    {"columnName": "2012-05", "columnNumber": "40","value": "0"},{"columnName": "2012-06", "columnNumber": "41","value": "0"},{"columnName": "2012-07", "columnNumber": "42","value": "0"},
    {"columnName": "2012-08", "columnNumber": "43","value": "0"},{"columnName": "2012-09", "columnNumber": "44","value": "0"},{"columnName": "2012-10", "columnNumber": "45","value": "0"},
    {"columnName": "2012-11", "columnNumber": "46","value": "0"},{"columnName": "2012-12", "columnNumber": "47","value": "0"},{"columnName": "2013-01", "columnNumber": "48","value": "0"},
    {"columnName": "2013-02", "columnNumber": "49","value": "0"},{"columnName": "2013-03", "columnNumber": "50","value": "0"},{"columnName": "2013-04", "columnNumber": "51","value": "0"},
    {"columnName": "2013-05", "columnNumber": "52","value": "0"},{"columnName": "2013-06", "columnNumber": "53","value": "0"},{"columnName": "2013-07", "columnNumber": "54","value": "0"},
    {"columnName": "2013-08", "columnNumber": "55","value": "0"},{"columnName": "2013-09", "columnNumber": "56","value": "0"},{"columnName": "2013-10", "columnNumber": "57","value": "0"},
    {"columnName": "2013-11", "columnNumber": "58","value": "0"},{"columnName": "2013-12", "columnNumber": "59","value": "0"},{"columnName": "2014-01", "columnNumber": "60","value": "0"},
    {"columnName": "2014-02", "columnNumber": "61","value": "0"},{"columnName": "2014-03", "columnNumber": "62","value": "0"},{"columnName": "2014-04", "columnNumber": "63","value": "0"},
    {"columnName": "2014-05", "columnNumber": "64","value": "0"},{"columnName": "2014-06", "columnNumber": "65","value": "0"}], "pageState": "dummy"};

    var data1 = {"0":[{"columnName": "2012-05", "columnNumber": "0","value": "0"},{"columnName": "2012-08", "columnNumber": "1","value": "0"},{"columnName": "2012-11",
    "columnNumber": "2","value": "0"},{"columnName": "2013-02", "columnNumber": "3","value": "0"},{"columnName": "2013-05", "columnNumber": "4","value": "0"},{"columnName": "2013-08","columnNumber": "5","value": "0"},
    {"columnName": "2013-11", "columnNumber": "6","value": "0"},{"columnName": "2014-02", "columnNumber": "7","value": "0"},{"columnName": "2014-05", "columnNumber": "8","value": "0"},
    {"columnName": "2014-08", "columnNumber": "9","value": "0"},{"columnName": "2014-11", "columnNumber": "10","value": "0"},{"columnName": "2015-02", "columnNumber": "11","value": "0"},
    {"columnName": "Unknown", "columnNumber": "12","value": "0"}], "pageState": "dummyState"};


    var months = ["", "January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dates = {};
    var ebms = {};

    var baseYear = getYearAsInt(data[0][0].columnName);

    function getYearAsInt(str){
      return parseInt(str.slice(0,4));
    }

    function getMonthAsInt(str){
      return parseInt(str.slice(5,7));
    }

    function produceIntKeyForEBM(str){
        return ((getYearAsInt(str)-baseYear)*12 + getMonthAsInt(str));
    }


    _.each(data["0"], function(value, key, list){
        dates[value.columnNumber] = { "sliderInt": value.columnNumber, "cube": value.columnName, "sliderText": months[parseInt(value.columnName.slice(5,7))]+" "+value.columnName.slice(0,4)};
    });


    _.each(data1["0"], function(value, key, list){
  var sliderI = produceIntKeyForEBM(value.columnName);
        var t = produceIntKeyForEBM("2014-11");
        ebms[value.columnNumber] = {"sliderInt": produceIntKeyForEBM(value.columnName), "cube": value.columnName, "sliderText": months[parseInt(value.columnName.slice(5,7))]+" "+value.columnName.slice(0,4)}
    });

    var a = ebms;
    var b = dates;


  //})(_);



});
