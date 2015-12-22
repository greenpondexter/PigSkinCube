/// <reference path="jquery-1.9.1-vsdoc.js" />
/// <reference path="chosen.jquery.js" />

(function ($, undefined) {
    $.widget('MedInsight.searchbox', {

        _selectCtrl: null,

        options: {
            getData: $.noop,
            change: $.noop,
            collapse: $.noop,
            expand: $.noop,
            multipleSelection: false
        },

        _create: function () {

            var _this = this;
            _selectCtrl = $('<select>').appendTo(this.element);
            if (this.options.multipleSelection)
                _selectCtrl.prop('multiple', true);

            $('<option>').appendTo(_selectCtrl);

            this.options.getData('');

            //support all chosen options by passing options directly into chosen
            _selectCtrl.chosen(this.options)
                .on('chosen:hiding_dropdown', function () {
                    _this.options.collapse();
                })
                .on('chosen:showing_dropdown', function () {
                    _this.options.expand();
                })
                .change(function (e, obj) {
                    var selected = $(this).find('option:selected');
                    var resultArray = [];
                    selected.each(function () {
                        var result = {};
                        result[$(this).val()] = $(this).text();
                        resultArray.push(result);
                    });
                    _this.options.change(resultArray);
                }
                );
        },

        update: function (data) {
            _selectCtrl.empty();
            $('<option>').appendTo(_selectCtrl);
            if ($.isArray(data))
            {
                for (var i in data) {
                    $('<option>').val(data[i]).text(data[i]).appendTo(_selectCtrl);
                }
            }
            else
            {
                for (var i in data) {
                    $('<option>').val(i).text(data[i]).appendTo(_selectCtrl);
                }
            }
            _selectCtrl.trigger("chosen:updated");
        },
        open: function () {
            _selectCtrl.trigger("chosen:open");
        },
        close: function () {
            _selectCtrl.trigger("chosen:close");
        },
        setValues: function (objArray) {
            if (objArray.length == 0)
                return;

            //    _selectCtrl.find('option:first').after(
            //               $('<option>').val('All').text('All').prop('selected', true));

            for (var i in objArray)
            {
                for (var name in objArray[i])
                {
                    var inCurrentList = _selectCtrl.find('option[value="' + name + '"]');
                    if (inCurrentList.length > 0)
                        inCurrentList.prop('selected', true);
                    else {
                        _selectCtrl.find('option:first').after(
                            $('<option>').val(name).text(objArray[i][name]).prop('selected', true).addClass('notInCurrentList'));
                    }
                }
            }
            _selectCtrl.trigger("chosen:updated");
        }
    });
}(jQuery));
