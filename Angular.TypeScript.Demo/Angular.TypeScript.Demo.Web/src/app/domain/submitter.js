var Model;
(function (Model) {
    var Submitter = (function () {
        function Submitter(id, name) {
            if (!_.isString(id)) {
                throw new Error('id must be defined and a string');
            }
            if (!_.isString(name)) {
                throw new Error('name must be defined and a string');
            }
            this.id = id;
            this.name = name;
            this.initial = name[0];
        }
        return Submitter;
    })();
    Model.Submitter = Submitter;
})(Model || (Model = {}));
//# sourceMappingURL=submitter.js.map