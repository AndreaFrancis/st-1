/**
 * Created by Andrea on 31/05/2015.
 */
/**Fields**/
var name = '';
var description = '';

/**Helpers**/
Template.labs.helpers({
            labs: function() {
                return Labs.find();
            }
        }
    );
/**Methods**/
Template.labs.events({
        "click .saveLab": function(event) {
            insertLab({
                name : name,
                description: description
            });
        }
    }
);

function insertLab( newLab) {
    Labs.insert(newLab);
}

/**Getters**/
Template.labs.name = function() {
    return name;
};
Template.labs.description = function() {
    return description;
};

/**Setters**/
Template.labs.events({
        "input .name" : function(e) {
            name = e.target.value;
        },
        "input .description" : function(e) {
            description = e.target.value;
        }
    }
);