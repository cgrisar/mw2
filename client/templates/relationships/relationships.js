Template.relationships.helpers({
  relationships: function()
    { return Relationships.find() },

  isDefault: function(addressType)
    { for(var i = 0; i < addressType.length; i++){
        if(addressType[i].toLowerCase() === "default"){
          return true
        };
        return false
    }}
});