/**
 * Created by Andrea on 31/05/2015.
 */
Labs = new Mongo.Collection("labs");
Ground.Collection(Labs,'labs');
Labs.allow({
    insert: function (labId, doc) {
        return true;
    }
})